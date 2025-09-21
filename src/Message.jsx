import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Message() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Telegram API
  const token = "8172054262:AAEhvH8RUw1lcVlxAuRZet9fAulpwZgkpaM"; // ⚠️ remove from client in production
  const chatId = "1957744386";

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus("");

    const messageText = `
📝 *Yangi xabar!*
👤 Ism: ${data.fullname}
📧 Email: ${data.email}
💬 Xabar: ${data.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        setStatus("✅ Xabar muvaffaqiyatli yuborildi!");
        reset();
      } else {
        const errorData = await response.json();
        setStatus("❌ Xato: " + errorData.description);
      }
    } catch (error) {
      console.error("Telegram API Error:", error);
      setStatus("❌ Xabarni yuborishda muammo yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="mail"
      className="w-full lg:w-[300px] text-left"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-xl font-semibold mb-3">Bizga yozing</h3>

      {/* Fullname */}
      <input
        className="mt-1 mb-2 rounded-lg w-full h-11 pl-3 text-black outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Ism va familiya"
        {...register("fullname", { required: "Ismni kiriting" })}
      />
      {errors.fullname && (
        <p className="text-red-400 text-sm">{errors.fullname.message}</p>
      )}

      {/* Email */}
      <input
        className="mt-1 mb-2 rounded-lg w-full h-11 pl-3 text-black outline-none focus:ring-2 focus:ring-blue-400"
        type="email"
        placeholder="example@mail.com"
        {...register("email", {
          required: "Emailni kiriting",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Email noto‘g‘ri formatda",
          },
        })}
      />
      {errors.email && (
        <p className="text-red-400 text-sm">{errors.email.message}</p>
      )}

      {/* Message */}
      <textarea
        className="mt-1 mb-3 rounded-lg w-full h-24 pl-3 pt-2 text-black outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        placeholder="Xabaringizni yozing..."
        {...register("message", { required: "Xabarni kiriting" })}
      />
      {errors.message && (
        <p className="text-red-400 text-sm">{errors.message.message}</p>
      )}

      {/* Button */}
      <button
        type="submit"
        className="w-full h-11 bg-blue-600 hover:bg-blue-700 rounded-lg transition text-white disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "⏳ Yuborilmoqda..." : "✉️ Yuborish"}
      </button>

      {/* Status */}
      {status && (
        <p className="text-center mt-3 text-gray-300 italic text-sm">
          {status}
        </p>
      )}
    </form>
  );
}

export default Message;
