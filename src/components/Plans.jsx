import React from 'react';
import '../styles/global.css';

const Plans = () => {
    return (
        <section style={{ backgroundColor: '#fff', padding: '80px 0', color: '#333' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ color: '#000', borderBottom: 'none', marginBottom: '1rem' }}>ご利用料金</h2>
                    <p style={{ fontSize: '1.1rem' }}>
                        現在、サービス開始に伴う『制作実績（事例）』を募集しているため、<br />
                        <span style={{ fontWeight: 'bold', color: '#e60000', fontSize: '1.2rem' }}>先着10社限定</span>で特別価格にて承っております。
                    </p>
                </div>

                <div style={{ overflowX: 'auto', marginBottom: '4rem', padding: '10px' }}>
                    <table style={{
                        width: '100%',
                        maxWidth: '800px',
                        margin: '0 auto',
                        borderCollapse: 'separate',
                        borderSpacing: 0,
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        backgroundColor: '#fff'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-secondary)', color: '#fff' }}>
                                <th style={{ padding: '1.5rem', textAlign: 'center', width: '40%', fontSize: '1.1rem' }}>プラン名</th>
                                <th style={{ padding: '1.5rem', textAlign: 'center', width: '30%', fontSize: '1.1rem' }}>通常価格</th>
                                <th style={{ padding: '1.5rem', textAlign: 'center', width: '30%', fontSize: '1.1rem' }}>特別価格</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', fontWeight: 'bold', textAlign: 'center' }}>テキスト出版丸投げプラン</td>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', color: '#999', textDecoration: 'line-through', textAlign: 'center' }}>400,000円</td>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}>328,000円</td>
                            </tr>
                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', fontWeight: 'bold', textAlign: 'center' }}>マンガ出版丸投げプラン</td>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', color: '#999', textDecoration: 'line-through', textAlign: 'center' }}>400,000円</td>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}>328,000円</td>
                            </tr>
                            <tr style={{ backgroundColor: '#fffbeb', borderLeft: '4px solid #f5a623' }}>
                                <td style={{ padding: '1.5rem', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
                                    <span style={{
                                        backgroundColor: '#f5a623', color: '#fff', fontSize: '0.8rem', padding: '2px 8px', borderRadius: '4px', marginRight: '8px', verticalAlign: 'middle'
                                    }}>推奨</span>
                                    二刀流丸投げプラン
                                </td>
                                <td style={{ padding: '1.5rem', color: '#999', textDecoration: 'line-through', textAlign: 'center' }}>800,000円</td>
                                <td style={{ padding: '1.5rem', fontWeight: 'bold', fontSize: '1.4rem', color: '#e60000', textAlign: 'center' }}>548,000円</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#f8f8f8', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-secondary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                        本プラン（特別価格）に含まれるもの
                    </h3>
                    <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '1.1rem', lineHeight: '2' }}>
                        <li style={{ marginBottom: '1rem', textAlign: 'center' }}>
                            <span><span style={{ fontWeight: 'bold' }}>戦略・制作費</span>：298,000円<br />企画、執筆、制作、SEO、プロモーション</span>
                        </li>
                        <li style={{ marginBottom: '1rem', textAlign: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <span style={{ fontWeight: 'bold' }}>デザイン・実費パッケージ</span>：30,000円
                                <ul style={{ listStyle: 'none', paddingLeft: '0', marginTop: '0.5rem', fontSize: '1rem', color: '#555' }}>
                                    <li>プロ仕様の表紙デザイン</li>
                                    <li>Amazon A+コンテンツ（商品紹介コンテンツ）制作（3枚）</li>
                                    <li>ペーパーバック（紙書籍）出版設定</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div style={{ marginTop: '2rem', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center', color: 'var(--color-secondary)' }}>
                        「丸投げ」にこだわり、出版に必要なすべての工程をパッケージ化しました。<br />
                        追加のオプション費用は一切かかりません。
                    </div>
                </div>

                <div style={{ maxWidth: '900px', margin: '3rem auto 0', fontSize: '0.9rem', color: '#666' }}>
                    <p style={{ marginBottom: '0.5rem' }}>※全プランにしゅーぞーのプロモーション支援が標準付帯。</p>
                    <p style={{ marginBottom: '0.5rem' }}>※表紙デザイン・A+コンテンツ・ペーパーバック（紙本）の料金のみ、別途デザイナーよりご請求させていただきます。（デザインの対応はこちらで行わせていただきます）</p>
                    <p>※印税はこちらが頂くモデルになっておりますが、お受け取りを希望の場合は別途ご提案させていただきます。</p>
                </div>
            </div>
        </section>
    );
};

export default Plans;
