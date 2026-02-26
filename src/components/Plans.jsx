import React from 'react';
import '../styles/global.css';

const Plans = () => {
    return (
        <section id="plans" style={{ backgroundColor: '#f0f8ff', padding: '120px 0 80px 0', color: '#333' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ color: '#000', display: 'inline-block', borderBottom: '2px solid var(--color-secondary)', paddingBottom: '0.5rem', marginBottom: '2.5rem' }}>ご利用料金</h2>

                    {/* バナー風テキストエリア */}
                    <div style={{
                        background: '#ffffff',
                        border: '4px solid #e60000',
                        borderRadius: '12px',
                        padding: '2rem 1rem 1.5rem 1rem',
                        width: '90%',
                        maxWidth: '800px',
                        margin: '0 auto',
                        boxShadow: '0 8px 25px rgba(230, 0, 0, 0.15)',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-18px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: '#e60000',
                            color: '#fff',
                            padding: '6px 24px',
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
                            letterSpacing: '2px',
                            whiteSpace: 'nowrap'
                        }}>
                            SPECIAL CAMPAIGN
                        </div>
                        <div style={{
                            fontSize: 'clamp(1.2rem, 5vw, 2.5rem)',
                            color: '#e60000',
                            fontWeight: '900',
                            margin: '0',
                            lineHeight: '1.2',
                            letterSpacing: '2px',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                        }}>
                            先着10社限定特別価格
                        </div>
                    </div>
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
                                <th style={{ padding: '1.5rem', textAlign: 'center', width: '35%', fontSize: '1.1rem' }}>プラン名</th>
                                <th style={{ padding: '1.5rem', textAlign: 'center', width: '25%', fontSize: '1.1rem' }}>通常価格</th>
                                <th style={{ width: '10%' }}></th>
                                <th style={{ padding: '1.5rem', textAlign: 'center', width: '30%', fontSize: '1.1rem' }}>特別価格</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', fontWeight: 'bold', textAlign: 'center' }}>テキスト出版丸投げプラン</td>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', color: '#999', textDecoration: 'line-through', textAlign: 'center' }}>400,000円</td>
                                <td style={{ padding: '1.5rem 0', borderBottom: '1px solid #eee', textAlign: 'center', color: '#ccc', fontSize: '1.5rem' }}>→</td>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}>
                                    <span style={{ position: 'relative', display: 'inline-block' }}>
                                        328,000円
                                        <span className="discount-pop-circle-gray" style={{ transform: 'scale(0.85)', top: '-40px', right: '-52px' }}>18％<br />オフ</span>
                                    </span>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>(税込 360,800円)</span>
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', fontWeight: 'bold', textAlign: 'center' }}>マンガ出版丸投げプラン</td>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', color: '#999', textDecoration: 'line-through', textAlign: 'center' }}>400,000円</td>
                                <td style={{ padding: '1.5rem 0', borderBottom: '1px solid #eee', textAlign: 'center', color: '#ccc', fontSize: '1.5rem' }}>→</td>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #eee', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}>
                                    <span style={{ position: 'relative', display: 'inline-block' }}>
                                        328,000円
                                        <span className="discount-pop-circle-gray" style={{ transform: 'scale(0.85)', top: '-40px', right: '-52px' }}>18％<br />オフ</span>
                                    </span>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>(税込 360,800円)</span>
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: '#fffbeb', borderLeft: '4px solid #f5a623' }}>
                                <td style={{ padding: '1.5rem', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
                                    <span style={{
                                        backgroundColor: '#f5a623', color: '#fff', fontSize: '0.8rem', padding: '2px 8px', borderRadius: '4px', marginRight: '8px', verticalAlign: 'middle'
                                    }}>推奨</span>
                                    二刀流丸投げプラン
                                </td>
                                <td style={{ padding: '1.5rem', color: '#999', textDecoration: 'line-through', textAlign: 'center' }}>800,000円</td>
                                <td style={{ padding: '1.5rem 0', textAlign: 'center', color: '#ccc', fontSize: '1.5rem' }}>→</td>
                                <td style={{ padding: '1.5rem', fontWeight: 'bold', fontSize: '1.4rem', color: '#e60000', textAlign: 'center' }}>
                                    <span style={{ position: 'relative', display: 'inline-block' }}>
                                        548,000円
                                        <span className="discount-pop-circle" style={{ transform: 'scale(0.85)', top: '-40px', right: '-48px' }}>約30％<br />オフ</span>
                                    </span>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>(税込 602,800円)</span>
                                </td>
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
                                <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#333' }}>
                                    <span style={{ position: 'relative', display: 'inline-block' }}>
                                        328,000円
                                        <span className="discount-pop-circle-gray" style={{ transform: 'scale(0.85)', top: '-40px', right: '-52px' }}>18％<br />オフ</span>
                                    </span>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginTop: '2px', fontWeight: 'normal' }}>(税込 360,800円)</span>
                                </div>
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
                                <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#333' }}>
                                    <span style={{ position: 'relative', display: 'inline-block' }}>
                                        328,000円
                                        <span className="discount-pop-circle-gray" style={{ transform: 'scale(0.85)', top: '-40px', right: '-52px' }}>18％<br />オフ</span>
                                    </span>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginTop: '2px', fontWeight: 'normal' }}>(税込 360,800円)</span>
                                </div>
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
                                <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#e60000' }}>
                                    <span style={{ position: 'relative', display: 'inline-block' }}>
                                        548,000円
                                        <span className="discount-pop-circle" style={{ transform: 'scale(0.85)', top: '-40px', right: '-48px' }}>約30％<br />オフ</span>
                                    </span>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginTop: '2px', fontWeight: 'normal' }}>(税込 602,800円)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{
                    marginTop: '2rem',
                    fontWeight: 'bold',
                    fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
                    textAlign: 'center',
                    color: 'var(--color-secondary)',
                    lineHeight: '1.8',
                }}>
                    「丸投げ」にこだわり、<br />
                    インタビューからプロモーションまで、<br />
                    出版に必要なすべての工程をパッケージ化しました。<br />
                    <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.8em', fontWeight: 'normal', color: '#666' }}>（追加のオプション費用などは一切かかりません）</span>
                </div>

                <div style={{
                    maxWidth: '650px',
                    margin: '3rem auto 0',
                    background: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)',
                    border: '2px solid #ffd54f',
                    borderRadius: '8px',
                    padding: '1rem 1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 15px rgba(255, 193, 7, 0.15)',
                    width: '92%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{
                        fontSize: 'clamp(0.9rem, 3.5vw, 1.15rem)',
                        fontWeight: 'bold',
                        color: '#d84315',
                        lineHeight: '1.5',
                        letterSpacing: '0.5px',
                        display: 'inline-block'
                    }}>
                        全プランに<br />
                        しゅーぞー<span style={{ fontSize: '0.75em' }}>（Xフォロワー1.7万）</span>の<br />
                        プロモーション支援が標準付帯
                    </span>
                </div>

            </div >
        </section >
    );
};

export default Plans;
