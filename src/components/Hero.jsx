import React from 'react';
import '../styles/global.css';
import rikutoImg from '../assets/rikuto_icon.png';
import shuzoImg from '../assets/shuzo_icon.png';


const Hero = () => {
    return (
        <section className="hero-section" style={{
            padding: '260px 0 40px', // 上部の余白を少し戻しました（240px -> 260px）
            background: 'transparent', // Transparent to show global stylish background
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden', // Prevent horizontal scroll from large icons
            position: 'relative'
        }}>
            {/* Icons - Moved to top for mobile flow, Absolute Positioned on Desktop */}
            <div className="hero-icons-wrapper">
                <div className="hero-icon-left" style={{
                    position: 'absolute',
                    top: '28%', // 余白増加に合わせてアイコンも少し下に（25% -> 28%）
                    left: '10%', // Aligned to 10%
                    transform: 'translateY(-50%)',
                    width: 'clamp(200px, 20vw, 350px)',
                    height: 'clamp(200px, 20vw, 350px)', // Fixed height for container
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center', // Center content
                    // position: 'relative' removed, absolute acts as container
                }}>
                    {/* Label Positioned Above */}
                    <div className="hero-top-badge" style={{
                        position: 'absolute',
                        top: '-40px', // 上に少しずらして2行分のスペースを確保
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, #00A0E9 0%, #0077b6 100%)',
                        color: '#fff',
                        padding: '8px 20px', // 上下左右の余白を調整
                        borderRadius: '10px', // 多行の場合は角丸を少し抑えた方がまとまりが出ます
                        fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                        fontWeight: 'bold',
                        textAlign: 'center', // 中央揃え
                        lineHeight: '1.4', // 行間を調整
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                        zIndex: 10,
                        border: '2px solid #fff',
                        letterSpacing: '0.05em',
                        width: 'max-content' // 改行を維持するために幅を最大コンテンツに設定
                    }}>
                        日本最大級！500名超え<br />
                        Kindleオンラインサロン運営
                    </div>
                    {/* Ring 1: Blue Accent (Fast Spin) */}
                    <div style={{
                        position: 'absolute',
                        top: '-15px', left: '-15px', right: '-15px', bottom: '-15px',
                        border: '2px solid transparent',
                        borderTopColor: '#00A0E9', // Blue
                        borderRightColor: '#00A0E9',
                        borderRadius: '50%',
                        animation: 'spin-clockwise 3s linear infinite'
                    }}></div>

                    {/* Ring 2: Dashed/Gray (Slow Spin) */}
                    <div style={{
                        position: 'absolute',
                        top: '-8px', left: '-8px', right: '-8px', bottom: '-8px',
                        border: '2px dashed rgba(0, 160, 233, 0.3)', // Light Blue Dashed
                        borderRadius: '50%',
                        animation: 'spin-counter-clockwise 10s linear infinite'
                    }}></div>

                    <img src={shuzoImg} alt="しゅーぞー" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: 'none',
                        boxShadow: '0 0 25px rgba(0, 160, 233, 0.6)', // Blue Glow
                        opacity: 1,
                        position: 'relative',
                        zIndex: 2
                    }} />
                </div>

                {/* Cross Icon - Centered between images */}
                <div className="hero-cross-icon" style={{
                    position: 'absolute',
                    top: '28%', // コンテンツの上限に合わせて引き上げ（25% -> 28%）
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: '900',
                    color: 'var(--color-secondary)', // Blue color for the cross
                    zIndex: 0,
                    fontFamily: 'sans-serif',
                    animation: 'pulse-glow 1.5s infinite ease-in-out'
                }}>
                    ×
                </div>

                <div className="hero-icon-right" style={{
                    position: 'absolute',
                    top: '28%', // 余白増加に合わせてアイコンも少し下に（25% -> 28%）
                    right: '10%', // Reverted to 10%
                    transform: 'translateY(-50%)',
                    width: 'clamp(200px, 20vw, 350px)',
                    height: 'clamp(200px, 20vw, 350px)', // Fixed height
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // position: 'relative' removed
                }}>
                    {/* Label Positioned Above */}
                    <div className="hero-top-badge" style={{
                        position: 'absolute',
                        top: '-40px', // 上に少しずらして2行分のスペースを確保
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, #00A0E9 0%, #0077b6 100%)',
                        color: '#fff',
                        padding: '8px 20px', // 上下左右の余白を調整
                        borderRadius: '10px', // 多行の場合は角丸を少し抑えた方がまとまりが出ます
                        fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                        fontWeight: 'bold',
                        textAlign: 'center', // 中央揃え
                        lineHeight: '1.4', // 行間を調整
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                        zIndex: 10,
                        border: '2px solid #fff',
                        letterSpacing: '0.05em',
                        width: 'max-content' // 改行を維持するために幅を最大コンテンツに設定
                    }}>
                        難しい内容も読ませる<br />
                        漫画に昇華するAI漫画家
                    </div>
                    {/* Ring 1: Blue Accent (Fast Spin) */}
                    <div style={{
                        position: 'absolute',
                        top: '-15px', left: '-15px', right: '-15px', bottom: '-15px',
                        border: '2px solid transparent',
                        borderTopColor: '#00A0E9',
                        borderRightColor: '#00A0E9',
                        borderRadius: '50%',
                        animation: 'spin-clockwise 3s linear infinite',
                        animationDelay: '1s' // Offset
                    }}></div>

                    {/* Ring 2: Dashed/Gray (Slow Spin) */}
                    <div style={{
                        position: 'absolute',
                        top: '-8px', left: '-8px', right: '-8px', bottom: '-8px',
                        border: '2px dashed rgba(0, 160, 233, 0.3)',
                        borderRadius: '50%',
                        animation: 'spin-counter-clockwise 10s linear infinite'
                    }}></div>

                    <img src={rikutoImg} alt="りくと" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: 'none',
                        boxShadow: '0 0 25px rgba(0, 160, 233, 0.6)', // Blue Glow
                        opacity: 1,
                        position: 'relative',
                        zIndex: 2
                    }} />
                </div>
            </div>

            {/* Main Content Container */}
            <div className="container hero-main-content" style={{ position: 'relative', zIndex: 10 }}>

                <h1 className="hero-title" style={{
                    fontSize: 'clamp(3.0rem, 7.5vw, 6.0rem)', // Reduced further to 6.0rem max
                    fontWeight: '900',
                    lineHeight: '1.3',
                    margin: '0 auto 2rem',
                    maxWidth: '1200px',
                    color: '#333'
                }}>
                    <span className="stylish-underline" style={{ fontSize: '0.6em', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>あなたの<br />知識・経験を</span>
                    <span style={{
                        fontFamily: 'var(--font-family-serif)',
                        color: '#333', // Changed from blue to black for contrast
                        fontSize: '0.85em',
                        display: 'block',
                        lineHeight: '1.2'
                    }}>
                        見込み客を集め続ける<br />
                        <span className="text-shimmer" style={{ fontSize: '1.2em', marginTop: '0' }}>『最強の営業マン』へ。</span>
                    </span>
                </h1>

                <p className="hero-description" style={{
                    fontSize: '1.15rem', // Reduced from 1.25rem
                    marginBottom: '3.5rem',
                    maxWidth: '1000px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    color: '#555',
                    lineHeight: '1.8'
                }}>
                    テキスト本でもマンガでもOK！企画・原稿・マンガ化・デザイン・紙本化・SEO・販促まで、<br className="desktop-only" />
                    全て『丸投げ』で集客とブランディングを同時に達成しませんか？
                </p>

                <div className="hero-badges-container" style={{
                    display: 'flex',
                    flexDirection: 'column', // Stack vertically
                    alignItems: 'center', // Center align items
                    justifyContent: 'center',
                    gap: '1.0rem', // Reduced gap
                    marginBottom: '0'
                }}>
                    {[
                        <>Amazonレビュー500件を超える<br className="mobile-br" />ロングセラー書籍の漫画化実績あり</>,
                        <>Xフォロワー15万人<span className="desktop-only" style={{ display: 'inline' }}>・</span><br className="mobile-br" />YouTube登録者20万人超えの<br className="mobile-br" />インフルエンサー書籍も制作中</>
                    ].map((badge, index) => (
                        <div key={index} className="hero-badge" style={{
                            background: '#ffffff',
                            border: '3px solid var(--color-secondary)',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            fontSize: '1.15rem', // Reduced from 1.2rem
                            color: 'var(--color-secondary)',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            fontWeight: 'bold',
                            fontFamily: 'var(--font-family-base)'
                        }}>
                            {badge}
                        </div>
                    ))}
                </div>

                <p style={{
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    color: '#333',
                    marginTop: '3rem', // Increased margin
                    fontWeight: 'bold'
                }}>
                    ※現在、実績作り中のため、<br className="mobile-br" />今だけお得にご案内できます！
                </p>
            </div>
        </section>
    );
};

export default Hero;
