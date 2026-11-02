
import { useState } from 'react'

function App() {
  const [showMessage, setShowMessage] = useState(false)
  const [heart, setHeart] = useState(false)

  const hearts = Array.from({ length: 25 })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600&family=Playfair+Display:ital,wght@1,600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Kanit', sans-serif;
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 35px 15px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(
            -45deg,
            #ffd6e7,
            #ead7ff,
            #ffe5ed,
            #e3d5ff
          );
          background-size: 400% 400%;
          animation: gradient 10s ease infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .card {
          width: 100%;
          max-width: 460px;
          padding: 38px 25px;
          text-align: center;
          border-radius: 30px;
          background: rgba(255,255,255,.82);
          backdrop-filter: blur(20px);
          border: 1px solid white;
          box-shadow: 0 20px 60px rgba(173,91,143,.2);
          position: relative;
          z-index: 2;
          animation: appear 1s ease;
        }

        @keyframes appear {
          from {
            opacity: 0;
            transform: translateY(40px) scale(.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .main-heart {
          font-size: 60px;
          display: inline-block;
          animation: beat 1.3s infinite;
        }

        @keyframes beat {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .subtitle {
          color: #c47ca3;
          font-size: 11px;
          letter-spacing: 4px;
          margin: 10px 0;
        }

        h1 {
          font-family: 'Playfair Display', serif;
          font-size: 53px;
          color: #bd6b96;
          margin: 12px 0;
        }

        .divider {
          color: #d68bad;
          font-size: 23px;
          margin: 12px;
        }

        h2 {
          color: #a95883;
          font-size: 27px;
          font-weight: 500;
        }

        .name {
          color: #bd7da0;
          font-size: 19px;
          margin-top: 8px;
        }

        .description {
          color: #927486;
          line-height: 2;
          margin: 23px 0;
          font-size: 15px;
        }

        .flower {
          font-size: 48px;
          margin: 15px;
          animation: sway 3s infinite ease-in-out;
        }

        @keyframes sway {
          0%,100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }

        button {
          font-family: 'Kanit', sans-serif;
          cursor: pointer;
          transition: .3s;
        }

        .message-btn {
          border: none;
          border-radius: 50px;
          padding: 14px 28px;
          color: white;
          font-size: 15px;
          background: linear-gradient(135deg,#e89bbd,#bc7ed0);
          box-shadow: 0 8px 20px rgba(192,116,161,.3);
        }

        .message-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(192,116,161,.4);
        }

        .message {
          margin-top: 25px;
          padding: 22px;
          border-radius: 20px;
          background: #fff0f7;
          color: #92647c;
          line-height: 2;
          animation: appear .5s ease;
        }

        .message h3 {
          color: #b56e91;
          margin-bottom: 12px;
        }

        .message p {
          font-size: 14px;
          margin-bottom: 10px;
        }

        .heart-btn {
          display: block;
          margin: 20px auto 0;
          background: transparent;
          border: 1px solid #e6a5c4;
          border-radius: 30px;
          padding: 10px 22px;
          color: #c17b9f;
        }

        .heart-btn:hover,
        .heart-btn.active {
          background: #ffe2ee;
          transform: scale(1.08);
        }

        .footer {
          margin-top: 30px;
          color: #c49bb0;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .floating-heart {
          position: absolute;
          bottom: -50px;
          color: rgba(255,255,255,.8);
          animation: float 10s linear infinite;
          pointer-events: none;
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0);
            opacity: 0;
          }
          20% { opacity: 1; }
          100% {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
          }
        }

        .sparkle {
          position: absolute;
          color: white;
          animation: twinkle 2s infinite alternate;
          pointer-events: none;
        }

        @keyframes twinkle {
          from { opacity: .2; transform: scale(.7); }
          to { opacity: 1; transform: scale(1.3); }
        }

        @media(max-width:480px) {
          .card { padding: 30px 18px; }
          h1 { font-size: 45px; }
          h2 { font-size: 24px; }
        }

        @media(prefers-reduced-motion:reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <div className="page">

        {/* หัวใจลอย */}
        {hearts.map((_, i) => (
          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${(i * 37) % 100}%`,
              fontSize: `${15 + (i % 4) * 7}px`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${7 + (i % 5)}s`
            }}
          >
            {i % 2 === 0 ? '♡' : '♥'}
          </span>
        ))}

        {/* ดาวระยิบระยับ */}
        <span className="sparkle" style={{top:'10%',left:'12%'}}>✦</span>
        <span className="sparkle" style={{top:'25%',right:'12%'}}>✧</span>
        <span className="sparkle" style={{bottom:'15%',left:'10%'}}>✦</span>
        <span className="sparkle" style={{bottom:'20%',right:'10%'}}>✧</span>

        <main className="card">

          <div className="main-heart">💗</div>

          <p className="subtitle">
            A LITTLE MESSAGE FOR YOU
          </p>

          <h1>I'm Sorry</h1>

          <div className="divider">♡ ─── ♡</div>

          <h2>ขอโทษเมียสุดที่รัก</h2>

          <p className="name">
            คุณ ชลธิชา ม่วงสุราช
          </p>

          <p className="description">
            เค้าขอโทษน๊าเมียสุดที่รักหายโกรธเค้านะ
          </p>

          <div className="flower">🌷</div>

          {/* ปุ่มเปิดข้อความ */}
          <button
            className="message-btn"
            onClick={() => setShowMessage(!showMessage)}
          >
            {showMessage
              ? 'ปิดข้อความ ♡'
              : 'อ่านข้อความจากใจ 💌'}
          </button>

          {showMessage && (
            <div className="message">
              <h3>💌 ถึงคุณชลธิชา</h3>

              <p>
                เค้ารู้ว่าคำขอโทษอาจไม่สามารถ
                ทำให้ทุกอย่างกลับมาเหมือนเดิมได้ทันที
                แต่เค้าอยากให้อ้วนรู้ว่า
                เค้าเสียใจกับสิ่งที่เกิดขึ้นจริง ๆ
              </p>

              <p>
                เค้าจะพยายามปรับปรุงตัว
                และไม่อยากทำให้อ้วนต้องเสียใจอีก
              </p>

              <p>
                หายโกรธเค้านะที่รัก ❤️
              </p>
            </div>
          )}

          {/* ปุ่มส่งหัวใจ */}
          <button
            className={`heart-btn ${heart ? 'active' : ''}`}
            onClick={() => setHeart(!heart)}
          >
            {heart
              ? '💖 ขอบคุณนะครับ'
              : '♡ ส่งหัวใจให้หน่อย'}
          </button>

          <div className="footer">
            ทำจากใจ นายจุลจักร ม่วงสุราช ♡
          </div>

        </main>
      </div>
    </>
  )
}

export default App
