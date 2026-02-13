import React from 'react';
import '../styles/global.css';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-page">
            <Header />
            <section style={{ backgroundColor: '#fff', padding: '120px 0', color: '#333' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>プライバシーポリシー</h2>

                    <div className="policy-content" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '2rem' }}>
                            株式会社Publinks（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', borderBottom: '2px solid #00A0E9', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '3rem' }}>第1条（個人情報）</h3>
                        <p style={{ marginBottom: '2rem' }}>
                            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', borderBottom: '2px solid #00A0E9', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '3rem' }}>第2条（個人情報の収集方法）</h3>
                        <p style={{ marginBottom: '2rem' }}>
                            当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', borderBottom: '2px solid #00A0E9', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '3rem' }}>第3条（個人情報を収集・利用する目的）</h3>
                        <p style={{ marginBottom: '1rem' }}>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li>当社サービスの提供・運営のため</li>
                            <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                            <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                            <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                            <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                            <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
                            <li>上記の利用目的に付随する目的</li>
                        </ol>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', borderBottom: '2px solid #00A0E9', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '3rem' }}>第4条（利用目的の変更）</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
                            <li>利用目的の変更を行った場合には、変更後の目的について、当社所定の方法によりユーザーに通知し、または本ウェブサイト上に公表するものとします。</li>
                        </ol>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', borderBottom: '2px solid #00A0E9', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '3rem' }}>第5条（個人情報の第三者提供）</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                                <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', listStyleType: 'lower-alpha' }}>
                                    <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                                    <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                                    <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                                    <li>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき</li>
                                </ol>
                            </li>
                            <li>
                                前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。
                                <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', listStyleType: 'lower-alpha' }}>
                                    <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                                    <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                                    <li>個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合</li>
                                </ol>
                            </li>
                        </ol>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', borderBottom: '2px solid #00A0E9', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '3rem' }}>第6条（個人情報の開示）</h3>
                        <p style={{ marginBottom: '2rem' }}>
                            当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', borderBottom: '2px solid #00A0E9', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '3rem' }}>第7条（お問い合わせ窓口）</h3>
                        <p style={{ marginBottom: '2rem' }}>
                            本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。<br /><br />
                            株式会社Publinks<br />
                            運営統括責任者: 小川 修平<br />
                            Chatwork: <a href="https://www.chatwork.com/shuzo_kindle" target="_blank" rel="noopener noreferrer" style={{ color: '#00A0E9', textDecoration: 'underline' }}>https://www.chatwork.com/shuzo_kindle</a>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
