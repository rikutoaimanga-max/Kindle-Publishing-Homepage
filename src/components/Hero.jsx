import React from 'react';
import '../styles/global.css';
import rikutoImg from '../assets/rikuto_icon.png';
import shuzoImg from '../assets/shuzo_icon.png';

const Hero = () => {
    return (
        <section className="hero-section" style={{
            padding: '340px 0 40px', // Further increased top padding
            background: 'linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%)', // Updated to match CTA title background
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
                    top: '25%', // Lowered from 20%
                    left: '10%', // Moved inward from 5%
                    transform: 'translateY(-50%)',
                    width: 'clamp(200px, 20vw, 350px)',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                        fontWeight: 'bold',
                        color: '#000',
                        marginBottom: '0.5rem',
                        textShadow: '0 2px 4px rgba(255,255,255,0.8)'
                    }}>テキスト</div>
                    <img src={shuzoImg} alt="しゅーぞー" style={{
                        width: '100%',
                        height: 'clamp(200px, 20vw, 350px)', // Maintain height constraint on image
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '4px solid #ffffff',
                        opacity: 0.8,
                        filter: 'drop-shadow(0 10px 20px rgba(0, 160, 233, 0.2))'
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
                    opacity: 0.5,
                    fontFamily: 'sans-serif'
                }}>
                    ×
                </div>

                <div className="hero-icon-right" style={{
                    position: 'absolute',
                    top: '25%', // Lowered from 20%
                    right: '10%', // Moved inward from 5%
                    transform: 'translateY(-50%)',
                    width: 'clamp(200px, 20vw, 350px)',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                        fontWeight: 'bold',
                        color: '#000',
                        marginBottom: '0.5rem',
                        textShadow: '0 2px 4px rgba(255,255,255,0.8)'
                    }}>漫画</div>
                    <img src={rikutoImg} alt="りくと" style={{
                        width: '100%',
                        height: 'clamp(200px, 20vw, 350px)', // Maintain height constraint on image
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '4px solid #ffffff',
                        opacity: 0.8,
                        filter: 'drop-shadow(0 10px 20px rgba(0, 160, 233, 0.2))'
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
                    <span style={{ fontSize: '0.7em', display: 'block', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>あなたの<br />知識・経験を</span>
                    <span className="hero-marker" style={{
                        fontFamily: 'var(--font-family-serif)',
                        color: 'var(--color-secondary)',
                        fontSize: '0.85em', // Reduced from 0.9em
                        display: 'block',
                        lineHeight: '1.2',
                        // background property moved to CSS .hero-marker for responsive control
                    }}>
                        24時間働き続ける<br />『最強の営業マン』へ。
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
