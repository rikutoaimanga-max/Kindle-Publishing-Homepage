import React from 'react';
import '../styles/global.css';
import rikutoImg from '../assets/rikuto_icon.png';
import shuzoImg from '../assets/shuzo_icon.png';

const Hero = () => {
    return (
        <section style={{
            padding: '120px 0 40px', // Top padding for fixed header
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // Light clean gradient
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden', // Prevent horizontal scroll from large icons
            position: 'relative'
        }}>
            {/* Desktop Icons - Absolute Positioned */}
            <div className="desktop-only" style={{
                position: 'absolute',
                top: '25%',
                left: '5%',
                transform: 'translateY(-50%)',
                width: 'clamp(200px, 20vw, 350px)',
                height: 'clamp(200px, 20vw, 350px)',
                zIndex: 1,
                opacity: 0.8,
                filter: 'drop-shadow(0 10px 20px rgba(0, 160, 233, 0.2))' // Soft blue shadow
            }}>
                <img src={shuzoImg} alt="しゅーぞー" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '4px solid #ffffff' }} />
            </div>

            <div className="desktop-only" style={{
                position: 'absolute',
                top: '25%',
                right: '5%',
                transform: 'translateY(-50%)',
                width: 'clamp(200px, 20vw, 350px)',
                height: 'clamp(200px, 20vw, 350px)',
                zIndex: 1,
                opacity: 0.8,
                filter: 'drop-shadow(0 10px 20px rgba(0, 160, 233, 0.2))' // Soft blue shadow
            }}>
                <img src={rikutoImg} alt="りくと" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '4px solid #ffffff' }} />
            </div>

            {/* Main Content Container */}
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>

                <h1 className="hero-title" style={{
                    fontSize: 'clamp(3rem, 7vw, 6rem)',
                    fontWeight: '900',
                    lineHeight: '1.3',
                    margin: '0 auto 2rem',
                    maxWidth: '1000px', // Wider container for larger text
                    color: '#333'
                }}>
                    <span style={{ fontSize: '0.6em', display: 'block', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>あなたの<br />知識・経験を、</span>
                    <span style={{
                        fontFamily: 'var(--font-family-serif)',
                        color: 'var(--color-secondary)',
                        fontSize: '0.8em',
                        display: 'block',
                        lineHeight: '1.2',
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(0, 160, 233, 0.2) 60%)' // Marker style highlight
                    }}>
                        24時間働き続ける<br />『最強の営業マン』へ。
                    </span>
                </h1>

                <p style={{
                    fontSize: '1.3rem',
                    marginBottom: '3.5rem',
                    maxWidth: '900px',
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
                    gap: '1rem', // Slightly reduced gap for vertical stacking
                    marginBottom: '0'
                }}>
                    {['Amazonレビュー500件を超える大ヒット作の漫画化実績あり', 'Xフォロワー8万人、15万人のインフルエンサーの作品を制作中'].map((badge, index) => (
                        <div key={index} className="hero-badge" style={{
                            background: '#ffffff',
                            border: '2px solid var(--color-secondary)',
                            padding: '0.8rem 1.6rem',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
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
                    marginTop: '0.5rem',
                }}>
                    ※現在、実績作り中のため、お得にご案内できます！
                </p>


            </div>
        </section>
    );
};

export default Hero;
