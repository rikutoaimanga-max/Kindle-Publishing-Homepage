import React from 'react';
import '../styles/global.css';
import rikutoImg from '../assets/rikuto_icon.png';
import shuzoImg from '../assets/shuzo_icon.png';

const Profile = () => {
    return (

        <section style={{ backgroundColor: 'var(--color-secondary)', color: '#333', padding: '80px 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title" style={{ color: '#fff', textAlign: 'center' }}>運営者プロフィール</h2>
                <div className="grid grid-2">
                    <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#fff' }}>
                        <div style={{ width: '150px', height: '150px', margin: '0 auto 1rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-secondary)' }}>
                            <img src={shuzoImg} alt="しゅーぞー" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3 style={{ textAlign: 'center', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                            【テキスト本制作・PR支援】<br />小川 修平（しゅーぞー）
                        </h3>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.8', textAlign: 'left' }}>
                            株式会社Publinks代表（インボイス対応法人）<br />
                            ・Xフォロワー 約1.7万人<br />
                            ・元東証プライムメーカー研究・開発職<br />
                            ・代表作『“超”X運用術』レビュー600件超え<br />
                            ・積水ハウス、サンクチュアリ出版にてオフラインセミナー実施<br />
                            ・Kindle出版オンラインサロンNEXUS主催（約500名在席）<br />
                            ・Kindle出版オープンチャットゆると～く主催（約1400名在席）<br />
                            ・25冊出版、総印税600万円超え、Amazon総合ランキング最高12位
                        </p>
                    </div>

                    <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#fff' }}>
                        <div style={{ width: '150px', height: '150px', margin: '0 auto 1rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-secondary)' }}>
                            <img src={rikutoImg} alt="りくと" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3 style={{ textAlign: 'center', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                            【漫画制作チーム監修】<br />町田 亮（りくと）
                        </h3>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.8', textAlign: 'left' }}>
                            AI Create Studio（AI漫画クリエイター）<br />
                            ・AI漫画制作代行実績業界1<br />
                            ・AI漫画制作代行4件同時制作中<br />
                            ・AI漫画スクールブランドアンバサダー<br />
                            ・個人初Kindle漫画ベストセラー6冠獲得<br />
                            ・8月のフェスイベントにAI漫画講師として登壇予定<br />
                            ・LP漫画、漫画名刺、クライアントワーク多数対応
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
