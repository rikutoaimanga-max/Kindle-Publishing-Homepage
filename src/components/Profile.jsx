import React from 'react';
import '../styles/global.css';
import rikutoImg from '../assets/rikuto_icon.png';
import shuzoImg from '../assets/shuzo_icon.png'; // Assuming png for consistency, will clarify with user if it's jpg from their end

const Profile = () => {
    return (
        <section style={{ backgroundColor: '#111', color: '#fff', padding: '80px 0' }}>
            <div className="container">
                <h2 className="section-title">運営者プロフィール</h2>
                <div className="grid grid-2">
                    <div style={{ padding: '2rem', border: '1px solid #333' }}>
                        <div style={{ width: '150px', height: '150px', margin: '0 auto 1rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-secondary)' }}>
                            <img src={shuzoImg} alt="しゅーぞー" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3 style={{ textAlign: 'center', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                            【テキスト本制作・PR支援】<br />小川 修平（しゅーぞー）
                        </h3>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                            株式会社Publinks代表（インボイス対応法人）。<br />
                            25冊出版、代表作レビュー600件超、Amazonランキング12位獲得等実績多数のSEOエキスパート。<br />
                            1.7万フォロワー、合計2000名コミュニティ運営等の影響力でプロモーションを完全支援。<br />
                            積水ハウス、サンクチュアリ出版にてオフラインセミナー実施
                        </p>
                    </div>

                    <div style={{ padding: '2rem', border: '1px solid #333' }}>
                        <div style={{ width: '150px', height: '150px', margin: '0 auto 1rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-secondary)' }}>
                            <img src={rikutoImg} alt="りくと" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3 style={{ textAlign: 'center', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                            【マンガ制作】りくと
                        </h3>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                            「Xフォロワー1.7万人の影響力」×「緻密なAmazon SEO」×「売れる構成力」で、あなたの知識と経験を、単なる本ではなく「24時間働き続ける最強の資産」へと昇華させます。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
