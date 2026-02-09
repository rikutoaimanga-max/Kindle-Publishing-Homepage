import React from 'react';
import '../styles/global.css';

const Plans = () => {
    return (
        <section style={{ backgroundColor: '#fff', padding: '80px 0', color: '#333' }}>
            <div className="container">
                <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', borderBottom: 'none', marginBottom: '1rem', fontWeight: 'bold' }}>6. ご利用料金</h2>
                    <p>現在、サービス開始に伴う『制作実績（事例）』を募集しているため、<span style={{ fontWeight: 'bold' }}>先着10社限定</span>で特別価格にて承っております。</p>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                        （見せ方：通常価格に打ち消し線を入れ、横に赤字で特別価格を配置。実際にこちらから提案する時は、もうちょっと値下げしてもOKかなって思ってます）
                    </p>
                </div>

                <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid #000', fontSize: '1.1rem' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f0f0f0' }}>
                                <th style={{ border: '1px solid #000', padding: '1rem', textAlign: 'left', width: '40%' }}>プラン名</th>
                                <th style={{ border: '1px solid #000', padding: '1rem', textAlign: 'left', width: '30%' }}>通常価格（アンカー）</th>
                                <th style={{ border: '1px solid #000', padding: '1rem', textAlign: 'left', width: '30%' }}>特別価格</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '1rem', fontWeight: 'bold' }}>テキスト出版丸投げプラン</td>
                                <td style={{ border: '1px solid #000', padding: '1rem' }}>400,000円</td>
                                <td style={{ border: '1px solid #000', padding: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>328,000円</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '1rem', fontWeight: 'bold' }}>マンガ出版丸投げプラン</td>
                                <td style={{ border: '1px solid #000', padding: '1rem' }}>400,000円</td>
                                <td style={{ border: '1px solid #000', padding: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>328,000円</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '1rem', fontWeight: 'bold' }}>【推奨】二刀流丸投げ</td>
                                <td style={{ border: '1px solid #000', padding: '1rem' }}>800,000円</td>
                                <td style={{ border: '1px solid #000', padding: '1rem', fontWeight: 'bold', fontSize: '1.2rem', color: '#e60000' }}>548,000円</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
                        本プラン（特別価格）には以下の費用がすべて含まれています：
                    </h3>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        <li><span style={{ fontWeight: 'bold' }}>戦略・制作費</span>：298,000円（企画、執筆、SEO、プロモーション）</li>
                        <li><span style={{ fontWeight: 'bold' }}>デザイン・実費パッケージ</span>：30,000円
                            <ul style={{ listStyle: 'circle', paddingLeft: '2rem', marginTop: '0.5rem' }}>
                                <li>プロ仕様の表紙デザイン</li>
                                <li>Amazon A+コンテンツ（商品紹介コンテンツ）制作（3枚）</li>
                                <li>ペーパーバック（紙書籍）出版設定</li>
                            </ul>
                        </li>
                    </ul>
                    <div style={{ marginTop: '2rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        「丸投げ」にこだわり、出版に必要なすべての工程をパッケージ化しました。追加のオプション費用は一切かかりません。
                    </div>
                </div>

                <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                    <p>※全プランにしゅーぞーのプロモーション支援が標準付帯。</p>
                    <p>※表紙デザイン・A+コンテンツ・ペーパーバック（紙本）の料金のみ、別途デザイナーよりご請求させていただきます。（デザインの対応はこちらで行わせていただきます）</p>
                    <p>※印税はこちらが頂くモデルになっておりますが、お受け取りを希望の場合は別途ご提案させていただきます。</p>
                </div>
            </div>
        </section>
    );
};

export default Plans;
