import React from 'react';
import '../styles/global.css';

const Plans = () => {
    return (
        <section id="plans" style={{ backgroundColor: '#f0f8ff', padding: '120px 0 80px 0', color: '#333' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ color: '#000', display: 'inline-block', borderBottom: '2px solid var(--color-secondary)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>ご利用料金</h2>
                    <p style={{ fontSize: '1.1rem' }}>
                        現在、サービス開始に伴う<br />
                        『制作実績（事例）』を募集しているため<br />
                        <span style={{ fontWeight: 'bold', color: '#e60000', fontSize: '1.2rem' }}>先着10社限定</span><br />
                        で、特別価格にて承っております。
                    </p>
                </div>

                {/* デスクトップ用テーブル */}
                <div className="desktop-only" style={{ overflowX: 'auto', marginBottom: '4rem', padding: '10px' }}>
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

                {/* モバイル用カード */}
                <div className="mobile-only" style={{ display: 'none', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', padding: '0 0.5rem' }}>
                    {/* テキスト出版 */}
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                        border: '1px solid #e8e8e8',
                    }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '1rem', textAlign: 'center', color: '#333' }}>
                            テキスト出版丸投げプラン
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75rem', color: '#999', marginBottom: '0.3rem' }}>通常価格</div>
                                <div style={{ color: '#999', textDecoration: 'line-through', fontSize: '0.95rem' }}>400,000円</div>
                            </div>
                            <div style={{ fontSize: '1.5rem', color: '#ccc' }}>→</div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', marginBottom: '0.3rem', fontWeight: 'bold' }}>特別価格</div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#333' }}>328,000円</div>
                            </div>
                        </div>
                    </div>

                    {/* マンガ出版 */}
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                        border: '1px solid #e8e8e8',
                    }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '1rem', textAlign: 'center', color: '#333' }}>
                            マンガ出版丸投げプラン
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75rem', color: '#999', marginBottom: '0.3rem' }}>通常価格</div>
                                <div style={{ color: '#999', textDecoration: 'line-through', fontSize: '0.95rem' }}>400,000円</div>
                            </div>
                            <div style={{ fontSize: '1.5rem', color: '#ccc' }}>→</div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', marginBottom: '0.3rem', fontWeight: 'bold' }}>特別価格</div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#333' }}>328,000円</div>
                            </div>
                        </div>
                    </div>

                    {/* 二刀流（推奨） */}
                    <div style={{
                        backgroundColor: '#fffbeb',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                        border: '2px solid #f5a623',
                    }}>
                        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                            <span style={{
                                backgroundColor: '#f5a623', color: '#fff', fontSize: '0.75rem', padding: '3px 10px', borderRadius: '4px', fontWeight: 'bold'
                            }}>推奨</span>
                        </div>
                        <div style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '1rem', textAlign: 'center', color: '#333' }}>
                            二刀流丸投げプラン
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75rem', color: '#999', marginBottom: '0.3rem' }}>通常価格</div>
                                <div style={{ color: '#999', textDecoration: 'line-through', fontSize: '0.95rem' }}>800,000円</div>
                            </div>
                            <div style={{ fontSize: '1.5rem', color: '#ccc' }}>→</div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75rem', color: '#e60000', marginBottom: '0.3rem', fontWeight: 'bold' }}>特別価格</div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#e60000' }}>548,000円</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="plans-included" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '2rem 1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)', fontWeight: 'bold', marginBottom: '2rem', borderBottom: '2px solid var(--color-secondary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                        本プラン（特別価格）に含まれるもの
                    </h3>

                    {/* 戦略・制作費 */}
                    <div style={{
                        backgroundColor: '#f8fbff',
                        borderRadius: '10px',
                        padding: '1.5rem 1rem',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(0, 160, 233, 0.15)',
                    }}>
                        <div style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
                            戦略・制作費
                        </div>
                        <div style={{ fontSize: 'clamp(1.2rem, 4vw, 1.4rem)', fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: '0.8rem' }}>
                            298,000円
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>
                            企画、執筆、制作、<br className="mobile-br" />SEO、プロモーション
                        </div>
                    </div>

                    {/* デザイン・実費パッケージ */}
                    <div style={{
                        backgroundColor: '#f8fbff',
                        borderRadius: '10px',
                        padding: '1.5rem 1rem',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(0, 160, 233, 0.15)',
                    }}>
                        <div style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
                            デザイン・実費パッケージ
                        </div>
                        <div style={{ fontSize: 'clamp(1.2rem, 4vw, 1.4rem)', fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                            30,000円
                        </div>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', margin: 0, textAlign: 'left', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
                            <li style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.6rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)' }}>✓</span>
                                プロ仕様の表紙デザイン
                            </li>
                            <li style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.6rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)' }}>✓</span>
                                Amazon A+コンテンツ<br className="mobile-br" />（商品紹介コンテンツ）制作（3枚）
                            </li>
                            <li style={{ fontSize: '0.9rem', color: '#555', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)' }}>✓</span>
                                ペーパーバック（紙書籍）出版設定
                            </li>
                        </ul>
                    </div>

                    <div style={{
                        marginTop: '1.5rem',
                        fontWeight: 'bold',
                        fontSize: 'clamp(0.95rem, 3vw, 1.2rem)',
                        textAlign: 'center',
                        color: 'var(--color-secondary)',
                        lineHeight: '1.8',
                    }}>
                        「丸投げ」にこだわり、<br />
                        出版に必要なすべての工程を<br className="mobile-br" />パッケージ化しました。<br />
                        追加のオプション費用は一切かかりません。
                    </div>
                </div>

                <div style={{ maxWidth: '900px', margin: '3rem auto 0', fontSize: '0.8rem', color: '#666', padding: '0 1.5rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1rem' }}>※全プランにしゅーぞーのプロモーション支援が標準付帯。</p>
                    <p style={{ marginBottom: '1rem' }}>※表紙デザイン・A+コンテンツ・ペーパーバック（紙本）の料金のみ、別途デザイナーよりご請求させていただきます。（デザインの対応はこちらで行わせていただきます）</p>
                    <p>※印税はこちらが頂くモデルになっておりますが、お受け取りを希望の場合は別途ご提案させていただきます。</p>
                </div>
            </div>
        </section>
    );
};

export default Plans;
