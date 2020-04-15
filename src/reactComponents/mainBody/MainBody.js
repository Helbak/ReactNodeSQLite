import React from 'react';
import styles from './mainBody.css';


const MainHeader = props => (
    <div className={styles.mainBody}>
        <div className={styles.loveApp}>
            <div className={styles.title}>
                <span>Why <b>small business owners</b></span>
                <span><b>love</b> AppCo?</span>
            </div>
            <div className={styles.text}>
                <span>Our design projects are fresh and simple and will benefit your business</span>
                <span>greatly. Learn more about our work!</span>
            </div>
            <div className={styles.menu}>
                <div className={styles.square}>
                    <div className={styles.picture} style={{ backgroundImage: `url(${'images/VectorPoint.png'})` }}>
                        <div className={styles.shape} style={{ backgroundImage: `url(${'images/ShapePoint.png'})` }}></div>
                    </div>
                    <div className={styles.titleSquare}>Clean Design</div>
                    <div className={styles.textSquare}>
                        <span>Increase sales by showing true</span>
                        <span>dynamics of your website.</span>
                    </div>
                </div>
                <div className={styles.square}>
                    <div className={styles.picture} style={{ backgroundImage: `url(${'images/VectorPoint.png'})` }}>
                        <div className={styles.shape} style={{ backgroundImage: `url(${'images/ShapeData.png'})` }}></div>
                    </div>
                    <div className={styles.titleSquare}>Secure Data</div>
                    <div className={styles.textSquare}>
                        <span>Build your online store’s trust using</span>
                        <span>Social Proof & Urgency.</span>
                    </div>
                </div>
                <div className={styles.square}>
                    <div className={styles.picture} style={{ backgroundImage: `url(${'images/VectorPoint.png'})` }}>
                        <div className={styles.shape} style={{ backgroundImage: `url(${'images/ShapeRetina.png'})` }}></div>
                    </div>
                    <div className={styles.titleSquare}>Retina Ready</div>
                    <div className={styles.textSquare}>
                        <span>Realize importance of social proof in</span>
                        <span>customer’s purchase decision.</span>
                    </div>
                </div>
            </div>
            <div className={styles.start}>
                <div className={styles.startLeft}>
                    <div className={styles.startTitle}>
                        <span>Start Managing your apps</span>
                        <spa>business, more faster</spa>
                    </div>
                    <div className={styles.startText}>
                        <span>Objectively deliver professional value with diverse web-readiness.</span>
                        <span>Collaboratively transition wireless customer service without</span>
                        <span>goal-oriented catalysts for change. Collaboratively.</span>
                    </div>
                    <div className={styles.wrapStartBtn}>
                        <div className={styles.startBtn}>
                            Learn more
                    </div>
                    </div>
                </div>
                <div className={styles.startRight}>
                    <div className={styles.screen} >
                        <div className={styles.screenPage} style={{ backgroundImage: `url(${'images/ScreenPage.png'})` }}></div>
                    </div>
                    {/* <div className={styles.baseShadow} style={{ backgroundImage: `url(${'images/BaseShadow.png'})`}}></div> */}
                </div>
            </div>
        </div>

        <div className={styles.wrapAffordable}>
            <div className={styles.affordable} style={{ backgroundImage: `url(${'images/Affordable.png'})` }}>
                <div className={styles.affordableTitle}>
                    <span><b>Affordable Pricing and Packages</b></span>
                    <span>choose your best one</span>
                </div>
                <div className={styles.affordableText}>
                    <span>Monotonectally grow strategic process improvements vis-a-vis</span>
                    <span>integrated resources.</span>
                </div>
                <div className={styles.affordableMenu}>
                    <div className={styles.affordableOption}>
                        <div className={styles.optionTitle}>Basic</div>
                        <div className={styles.optionImg} style={{ backgroundImage: `url(${'images/OptionBasic.png'})` }}></div>
                        <div className={styles.optionPrice}>$29</div>
                        <div className={styles.optionText}>
                            <span>Push Notifications</span>
                            <span>Data Transfer</span>
                            <span>SQL Database</span>
                            <span>Search & SEO Analytics</span>
                            <span>24/7 Phone Support</span>
                            <span>2 months technical support</span>
                            <span>2+ profitable keyword</span>
                        </div>
                        <div className={styles.optionBtn}>Purchase now</div>
                    </div>
                    <div className={styles.affordableOption}>
                        <div className={styles.optionTitle}>Standard</div>
                        <div className={styles.optionImg} style={{ backgroundImage: `url(${'images/OptionStandart.png'})` }}></div>
                        <div className={styles.optionPrice}>$149</div>
                        <div className={styles.optionText}>
                            <span>Push Notifications</span>
                            <span>Data Transfer</span>
                            <span>SQL Database</span>
                            <span>Search & SEO Analytics</span>
                            <span>24/7 Phone Support</span>
                            <span>2 months technical support</span>
                            <span>2+ profitable keyword</span>
                        </div>
                        <div className={styles.optionBtn}>Purchase now</div>
                    </div>
                    <div className={styles.affordableOption}>
                        <div className={styles.optionTitle}>Unlimited</div>
                        <div className={styles.optionImg} style={{ backgroundImage: `url(${'images/OptionUnlimited.png'})` }}></div>
                        <div className={styles.optionPrice}>$39</div>
                        <div className={styles.optionText}>
                            <span>Push Notifications</span>
                            <span>Data Transfer</span>
                            <span>SQL Database</span>
                            <span>Search & SEO Analytics</span>
                            <span>24/7 Phone Support</span>
                            <span>2 months technical support</span>
                            <span>2+ profitable keyword</span>
                        </div>
                        <div className={styles.optionBtn}>Purchase now</div>
                    </div>
                </div>
                <div className={styles.affordableFooter}>
                    <span>If you need custom services or Need more? </span>
                    <span className={styles.contact}><b> Contact us</b></span>
                </div>
            </div>
        </div>
    </div>


);
export default MainHeader;