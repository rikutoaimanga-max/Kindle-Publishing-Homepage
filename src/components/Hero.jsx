import React from 'react';
import '../styles/global.css';
import rikutoImg from '../assets/rikuto_icon.png';
import shuzoImg from '../assets/shuzo_icon.png';


const Hero = () => {
    return (
        <section className="hero-section" style={{
            padding: '340px 0 40px', // Further increased top padding
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
                    top: '27%', // Adjusted from 25%
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
                    {/* Icon Badge Positioned Top-Right */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        transform: 'translate(30%, -30%)', // Float on corner
                        width: '74px', // Slightly larger
                        height: '74px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00A0E9 0%, #0077b6 100%)', // Blue Gradient
                        border: '4px solid #fff', // Thick white border
                        display: 'flex',
                        flexDirection: 'column', // Stack text
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                        zIndex: 10,
                        color: '#fff',
                        fontSize: '1.15rem', // Slightly larger for 2 lines
                        fontWeight: 'bold',
                        letterSpacing: '0.05em',
                        lineHeight: '1.1'
                    }}>
                        <span>テキ</span>
                        <span>スト</span>
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
                <div style={{
                    position: 'absolute',
                    top: '25%', // Lowered from 20%
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
                    top: '27%', // Adjusted from 25%
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
                    {/* Icon Badge Positioned Top-Right */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        transform: 'translate(30%, -30%)', // Float on corner
                        width: '74px',
                        height: '74px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00A0E9 0%, #0077b6 100%)', // Blue Gradient
                        border: '4px solid #fff', // Thick white border
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                        zIndex: 10,
                        color: '#fff',
                        fontSize: '1.4rem', // Larger for 2 chars
                        fontWeight: 'bold',
                        letterSpacing: '0.1em'
                    }}>
                        漫画
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
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>

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
                        24時間働き続ける<br />
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
                        <>Amazonレビュー500件を超える<br className="mobile-br" />大ヒット作の漫画化実績あり</>,
                        <>Xフォロワー8万人、15万人の<br className="mobile-br" />インフルエンサーの作品を制作中</>
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
                    ※現在、実績作り中のため、今だけお得にご案内できます！
                </p>
            </div>
        </section>
    );
};

export default Hero;
