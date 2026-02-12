import React from 'react';
import '../styles/global.css';
import CTA from './CTA';
import { FaTrophy } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Achievements = () => {
    // スライド画像の総数設定 (ここに数字を入れるだけでスライドが増減します)
    // 画像は public/image/manga_slide_{番号}.png という名前にしてください
    const TOTAL_SLIDES = 35;

    // Create array of slide numbers based on TOTAL_SLIDES
    const slideNumbers = Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1);

    const clients = [
        {
            name: 'こう吉様',
            attribute: '30代 男性',
            title: '500名超えのKindleサロンオーナー',
            image: '/image/koukichi.png',
            bookImage: '/image/koukichi_book.png', // Added book image
            bookUrl: 'https://amzn.asia/d/02C8aaPY', // Added book URL
            before: 'リスト取得：30件/月',
            // ... (skiplines) ...

            after: '80件（166% UP）',
            voice: 'りくとさんの制作する漫画は非常にクオリティが高く、告知前から印税が伸びるほど読者の反応が素晴らしいものでした。テキスト本を漫画化したことで、本のボリュームとクオリティが劇的に上がり、出版から時間が経った今でも1日1万ページ以上読まれるという成果が出ています。Amazon総合ランキングでも300位以内を記録するなど、あからさまに良い影響を実感しています。今回はテキストの原稿をそのまま漫画の原稿に差し替える形での対応を希望したため、リスト取りの部分に関しては正確なデータが取れていませんが、非常に満足度が高く、すでに2冊目の漫画化も依頼お願いしていて、3冊目、4冊目も継続して制作をお願いすることを決めています。現在、りくとさん自身の予約が数ヶ月先まで埋まっているとのことで、次の制作が待ち遠しいですが、それでも順番を待ってでもお願いしたいと思える安心感があります。シリーズ化を見据え、今後も長くお付き合いさせていただきたいクリエイターさんです。',
            period: '出版後2ヶ月',
            // ここにX(Twitter)のIDを入れると、感想の下にタイムラインが表示されます
            // (@付きでもOKです) 例: twitterId: '@koukichi_t',
            twitterId: '@kokichi_00'
        },
        {
            name: 'T.M様',
            attribute: '40代 男性',
            title: '経営者',
            before: '講演依頼：1件/月',
            after: '4件（300% UP / 4倍増）',
            voice: '出版前は「ただの経営者」でしたが、出版後は「著者の先生」として見られるようになり、講演依頼が急増しました。書籍が名刺代わりになり、初対面の方からの信頼獲得スピードが段違いです。',
            period: '出版後1ヶ月',
            twitterId: ''
        },
        {
            name: 'Y.I様',
            attribute: '30代 女性',
            title: '起業家・コーチ',
            before: '月商：100万円',
            after: '300万円（200% UP / 3倍増）',
            voice: '集客に追われる日々から解放されました。Amazonが自動的に集客してくれるので、私は本業のコーチングに集中できています。お客様の方から「お願いします」と言われるようになり、セールスのストレスがなくなりました。',
            period: '出版後2ヶ月',
            twitterId: ''
        }
    ];

    return (
        <>
            <section style={{
                background: 'linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%)',
                backgroundColor: '#e6f7ff', // Fallback
                padding: '80px 0',
                color: 'var(--color-text-dark)'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="section-title" style={{ color: '#000' }}>実績紹介</h2>
                    </div>


                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                        gap: '2.5rem',
                        maxWidth: '900px', // 2 columns max (360*2 + gap < 900, 360*3 > 900)
                        margin: '0 auto',
                        marginBottom: '4rem'
                    }}>
                        {clients.map((client, index) => (
                            <div key={index} style={{
                                backgroundColor: '#fff',
                                borderRadius: '15px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                position: 'relative',
                                overflow: 'hidden',
                                width: '100%',
                                minHeight: '800px', // Increased height as requested
                                height: 'auto',     // Allow growth
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                {/* 装飾的な背景要素 */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '6px',
                                    height: '100%',
                                    backgroundColor: 'var(--color-secondary)',
                                    zIndex: 1
                                }}></div>

                                {/* コンテンツラッパー（パディング用） */}
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: '1.8rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.2rem',
                                    zIndex: 2
                                }}>

                                    {/* ヘッダーエリア：人物紹介 */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', flexShrink: 0 }}>
                                        {/* アイコン */}
                                        {client.image ? (
                                            <img
                                                src={client.image}
                                                alt={client.name}
                                                style={{
                                                    width: '64px',
                                                    height: '64px',
                                                    borderRadius: '50%',
                                                    objectFit: 'cover',
                                                    border: '2px solid #eee'
                                                }}
                                            />
                                        ) : (
                                            <div style={{
                                                width: '64px',
                                                height: '64px',
                                                borderRadius: '50%',
                                                backgroundColor: '#eee',
                                                flexShrink: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.8rem',
                                                color: '#aaa'
                                            }}>
                                                User
                                            </div>
                                        )}

                                        {/* プロフィール */}
                                        <div>
                                            <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                {client.name}
                                            </div>
                                            <div style={{ fontSize: '0.95rem', color: 'var(--color-secondary)', fontWeight: 'bold' }}>
                                                {client.title}
                                            </div>
                                        </div>
                                    </div>

                                    {/* 書籍画像 (Optional) */}
                                    {client.bookImage && (
                                        <div style={{ margin: '0.5rem 0', textAlign: 'center' }}>
                                            {client.bookUrl ? (
                                                <a href={client.bookUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'opacity 0.3s' }} className="hover:opacity-80">
                                                    <img src={client.bookImage} alt={`${client.name}の書籍`} style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                                                </a>
                                            ) : (
                                                <img src={client.bookImage} alt={`${client.name}の書籍`} style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                                            )}
                                        </div>
                                    )}

                                    {/* ボディエリア：実績（B案：左側アクセントライン強調） */}
                                    <div style={{
                                        backgroundColor: '#fff',
                                        borderLeft: '4px solid #f5a623', // Match CTA button color, thinner line
                                        boxShadow: '0 3px 10px rgba(0,0,0,0.08)', // Shadow for depth
                                        padding: '1.2rem',
                                        borderRadius: '4px', // Slightly sharper corners
                                        flexShrink: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                            color: '#333',
                                            marginBottom: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            borderBottom: '1px solid #eee', // Lighter separator
                                            paddingBottom: '0.5rem'
                                        }}>
                                            <FaTrophy style={{ fontSize: '1.2rem', color: '#f57c00' }} /> <span style={{ letterSpacing: '0.05em' }}>実績</span>
                                        </div>

                                        {/* Before / After Layout */}
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                                            {/* Before */}
                                            <div style={{ fontSize: '0.9rem', color: '#666' }}>
                                                {client.before}
                                            </div>

                                            {/* Arrow */}
                                            <div style={{ fontSize: '1.2rem', color: '#f57c00', lineHeight: 1, padding: '0.2rem 0' }}>
                                                ▼
                                            </div>

                                            {/* After */}
                                            <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#d32f2f' }}>
                                                {client.after}
                                            </div>
                                        </div>

                                    </div>
                                    {/* フッターエリア：感想 */}
                                    <div
                                        data-lenis-prevent // Prevent Lenis smooth scroll from hijacking wheel event
                                        onWheel={(e) => e.stopPropagation()} // Stop event propagation just in case
                                        style={{
                                            backgroundColor: '#f9f9f9',
                                            padding: '1.2rem',
                                            borderRadius: '10px',
                                            position: 'relative',
                                            flex: '1 1 0', // Grow to fill remaining space
                                            minHeight: 0,  // Allow content to be taller than container (trigger overflow)
                                            fontSize: '0.9rem',
                                            overflowY: 'auto', // Enable scrolling
                                            overscrollBehavior: 'contain' // Prevent scroll chaining to parent
                                        }}>
                                        <p style={{ lineHeight: '1.7', color: '#444', position: 'relative', zIndex: 1, margin: 0 }}>
                                            {client.voice}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <div style={{
                            width: '100%',
                            overflow: 'hidden',
                            padding: '20px 0' // Add padding
                        }}>
                            <style>
                                {`
                                .swiper-wrapper {
                                    transition-timing-function: linear !important;
                                }
                            `}
                            </style>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1.5} // Show partial slides
                                breakpoints={{
                                    640: { slidesPerView: 2.2 },
                                    768: { slidesPerView: 3.2 },
                                    1024: { slidesPerView: 3.8 },
                                }}
                                loop={true}
                                speed={5000} // Slow constant speed
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false, // Don't stop on hover
                                }}
                                allowTouchMove={false} // Disable touch dragging for smoother continuous flow
                                className="mySwiper"
                                style={{ width: '100%', height: 'auto' }}
                            >
                                {slideNumbers.map((num) => (
                                    <SwiperSlide key={num}>
                                        <div style={{
                                            overflow: 'hidden',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                            border: '1px solid #eee',
                                            height: 'auto',
                                            aspectRatio: '3/4', // Maintain manga aspect ratio
                                            backgroundColor: '#fff'
                                        }}>
                                            <img
                                                src={`/image/manga_slide_${num}.png`}
                                                alt={`マンガ作品例 ${num}`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block'
                                                }}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Duplicate Slider (Text only) requested by user */}
                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1.5} // Show partial slides
                            breakpoints={{
                                640: { slidesPerView: 2.2 },
                                768: { slidesPerView: 3.2 },
                                1024: { slidesPerView: 3.8 },
                            }}
                            loop={true}
                            speed={5000} // Slow constant speed
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false, // Don't stop on hover
                                reverseDirection: true // Reverse direction for variety? No, keep same as requested "same slider"
                            }}
                            allowTouchMove={false} // Disable touch dragging for smoother continuous flow
                            className="mySwiperText"
                            style={{ width: '100%', height: 'auto' }}
                        >
                            {slideNumbers.map((num) => (
                                <SwiperSlide key={`text-${num}`}>
                                    <div style={{
                                        overflow: 'hidden',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                        border: '1px solid #eee',
                                        height: 'auto',
                                        aspectRatio: '3/4', // Maintain manga aspect ratio
                                        backgroundColor: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '2rem'
                                    }}>
                                        <div style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold',
                                            color: '#aaa',
                                            textAlign: 'center'
                                        }}>
                                            No Image Slide {num}<br />
                                            <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>Text Content Here</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section style={{
                backgroundColor: '#ffffff',
                padding: '80px 0 120px', // Increased bottom padding
                color: 'var(--color-text-dark)'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <CTA headerBackground="#fff" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Achievements;
