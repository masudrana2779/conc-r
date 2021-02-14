import React from 'react';
import BlogSidebar from "../bolg/blogSidebar";
import post_single_img from '../../../static/assets/images/blog/post_single_img.jpg';
import authorImg from '../../../static/assets/images/author/author-img.jpg';
import user_1 from '../../../static/assets/images/author/user_1.jpg';
import user_2 from '../../../static/assets/images/author/user_2.jpg';
import user_3 from '../../../static/assets/images/author/user_3.jpg';

const BlogDetailsBody = () => {
    return (
        <section className="blog_wrap pt_90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 cus_pad_left">
                        <div className="blog_content blog_single_content pb_100">
                            <div className="blog_single_item wow fadeInUp">
                                <p>Have it knackered David bonnet my lady ruddy down the pub, blower brown bread so I
                                    said William blimey don't get shirty with me up the duff, nice one cack a Why
                                    chinwag. I I hanky panky cheeky at public school bloke pear shaped gutted mate no
                                    biggie, amongst cras crikey blag dropped a clanger chimney pot bubble and squeak,
                                    blimey jolly good </p>

                                <p>Queen's English plastered my lady off his nut up the kyver. A blinding shot cheers
                                    brolly Charles up the buggered fanny around bum bag blow off, bleeder grub Why
                                    spiffing good time skive off cheeky knees up hotpot bits and bobs, Queen's English
                                    gosh I zonked smashing tinkety tonk old fruit off his nut. My lady cheeky that
                                    cheesed off super say blow off I don't want no agro tosser in my flat on your bike
                                    mate Harry bender chinwag you mug, at public school old Why daft he lost his bottle
                                    arse over tit Elizabeth dropped a clanger argy-bargy brilliant pear shaped cuppa a
                                    blinding shot. He legged it a blinding shot tinkety tonk old fruit absolutely
                                    bladdered give us a bell he nicked it what a load of rubbish lemon squeezy
                                    tickety-boo, posh golly gosh well mush young delinquent blow off cack, easy peasy
                                    baking cakes matie boy I say up the duff bamboozled. Quaint bleeder what a plonker I
                                    Jeffrey sloshed squiffy cras golly gosh, wind up pukka the BBC amongst the wireless
                                    naff car boot. So I said Harry argy-bargy cheesed off a you mug quaint, bugger only
                                    a quid blimey faff about loo I, jolly good pukka that victoria sponge well.</p>

                                <blockquote>
                                    <p>Tinkety tonk old fruit blimey bugger young delinquent the wireless a bit of how's
                                        your father the bee's knees blow off pardon you geeza.!</p>
                                </blockquote>

                                <p>David gosh blag in my flat cockup Harry wellies the BBC A bit of how's your father
                                    haggle owt to do with me lost the plot Charles no biggie, geeza jolly good get
                                    stuffed mate chip shop lavatory matie boy plastered he lost his bottle some dodgy
                                    chav crikey barmy. Brolly off his nut is bog-standard butty tomfoolery dropped a
                                    clanger tinkety tonk old fruit fantastic ummm I'm telling that, up the duff cras
                                    hunky-dory crikey cup of char blag hotpot chinwag don't get shirty with me, Charles
                                    barmy absolutely bladdered brilliant wind up horse play posh vagabond cack.</p>

                                <div className="blog_simg_img">
                                    <img src={post_single_img} className="img-fluid" alt="img" />
                                </div>

                                <h3 className="blog_inner_title">Spend a penny bits and bobs nice one a blinding
                                    shot</h3>
                                <p>A I don't want no agro at public school posh bits and bobs bog-standard bender some
                                    dodgy chav, blower hunky-dory what a load of rubbish lemon squeezy James Bond in my
                                    flat car boot, gutted mate Charles bugger young delinquent buggered a blinding shot.
                                    Golly gosh buggered cor blimey guvnor that it's your round nice one brilliant grub
                                    what a plonker hotpot, zonked pukka hanky panky give us a bell twit tomfoolery cup
                                    of char butty Jeffrey, chancer chimney pot blimey some dodgy chav oxford Charles
                                    brown bread bobby. Cuppa sloshed hanky panky spend a penny owt to do with me amongst
                                    a cup of tea butty bender up the kyver easy peasy, well pardon me brilliant pukka
                                    bum bag bodge me old mucker haggle pardon you arse over tit posh some dodgy chav,
                                    lost the plot chip shop you mug tosser brolly chinwag Oxford cup of char bloke in my
                                    flat. Queen's English zonked matie boy me old mucker that the little rotter daft
                                    gormless twit, boot what a load of rubbish it's all gone to pot gutted mate pear
                                    shaped quaint such.</p>

                                <p>He nicked it cheeky hunky-dory bugger Queen's English some dodgy chav in my flat
                                    Jeffrey spiffing, wellies I car boot geeza grub easy peasy fanny around starkers,
                                    bleeder bobby horse play Eaton chancer my good sir it's your round. In my flat brown
                                    bread bamboozled say bleeder the little rotter Oxford vagabond no biggie nancy boy
                                    tomfoolery, off his nut it's all gone to pot bonnet hunky.!</p>

                            </div>
                            <div className="blog_sing_tags wow fadeInUp">
                            <span className="sing_tags">
                                <b>Tags:</b>
                                <a href="#">Construction,</a>
                                <a href="#">Droitlab,</a>
                                <a href="#">UI design</a>
                            </span>
                                <span className="sing_share float-right">
                                <b>Share:</b>
                                <a href="#"><i className="social_facebook"></i></a>
                                <a href="#"><i className="social_twitter"></i></a>
                                <a href="#"><i className="social_pinterest"></i></a>
                                <a href="#"><i className="social_linkedin"></i></a>
                            </span>
                            </div>
                            <div className="author_about wow fadeInUp">
                                <div className="media">
                                    <div className="media-left"><img className="media-object"
                                                                     src={authorImg}
                                                                     alt="img" /></div>
                                    <div className="media-body">
                                        <h6 className="author_name"> Lurch Schpellchek </h6>
                                        <p className="author_info">Author</p>
                                        <p className="author_details">Nice one smashing I don't want no agro the BBC do
                                            one squiffy lemon squeezy cockup off his nut it's all gone to pot,
                                            pardon.!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment_reply wow fadeInUp">
                                <div className="comment_text">
                                    <h2 className="comment-title"> 3 Comments </h2>
                                </div>
                                <div className="comment_reply_form">
                                    <ul className="comment-list">
                                        <li>
                                            <div className="media">
                                                <div className="media-left"><img className="media-object"
                                                                                 src={user_1}
                                                                                 alt="img" /></div>
                                                <div className="media-body">
                                                    <div className="reply_body">
                                                        <h6 className="author_name"> Hanson Deck </h6>
                                                        <p className="author_info">January 7, 2019 at 1:44 pm</p>
                                                        <p className="author_details">Only a quid up the duff give us a
                                                            bell gosh golly gosh bobby dropped a clanger jolly good
                                                            burke on your bike mate matie boy, lavatory plastered.!</p>
                                                        <a href="#" className="reply_link"><i
                                                            className="arrow_back"></i>Reply</a>
                                                    </div>
                                                    <ul className="comment-list">
                                                        <li>
                                                            <div className="media">
                                                                <div className="media-left"><img
                                                                    className="media-object"
                                                                    src={user_2} alt="img" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="reply_body">
                                                                        <h6 className="author_name"> Hanson Deck </h6>
                                                                        <p className="author_info">January 7, 2019 at
                                                                            1:44 pm</p>
                                                                        <p className="author_details">Only a quid up the
                                                                            duff give us a bell gosh golly gosh bobby
                                                                            dropped a clanger jolly good burke on your
                                                                            bike mate matie boy, lavatory
                                                                            plastered.!</p>
                                                                        <a href="#" className="reply_link"><i
                                                                            className="arrow_back"></i>Reply</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="media-left"><img className="media-object"
                                                                                 src={user_3}
                                                                                 alt="img" /></div>
                                                <div className="media-body">
                                                    <div className="reply_body">
                                                        <h6 className="author_name"> Hanson Deck </h6>
                                                        <p className="author_info">January 7, 2019 at 1:44 pm</p>
                                                        <p className="author_details">Only a quid up the duff give us a
                                                            bell gosh golly gosh bobby dropped a clanger jolly good
                                                            burke on your bike mate matie boy, lavatory plastered.!</p>
                                                        <a href="#" className="reply_link"><i
                                                            className="arrow_back"></i>Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="leave_comment wow fadeInUp">
                                <div className="comment_text">
                                    <h2 className="comment-title"> Leave a comment </h2>
                                </div>
                                <div className="comment-respond">
                                    <form action="#" method="post" className="contact-form">
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12 form-group">
                                                <input type="text" className="form-control" name="author"
                                                       placeholder="Name" required />
                                            </div>
                                            <div className="col-sm-6 col-xs-12 form-group">
                                                <input type="text" className="form-control" name="author"
                                                       placeholder="Phone" />
                                            </div>
                                            <div className="col-sm-6 col-xs-12 form-group">
                                                <input type="email" className="form-control" name="email"
                                                       placeholder="Email" required />
                                            </div>
                                            <div className="col-sm-6 col-xs-12 form-group">
                                                <input type="url" className="form-control" placeholder="Website" />
                                            </div>
                                            <div className="col-sm-12 col-xs-12 form-group">
                                                <textarea name="comment" className="form-control"
                                                          placeholder="Your Comment" required></textarea>
                                            </div>
                                            <div className="col-sm-12 col-xs-12 form-group">
                                                <div className="form-submit"><input name="submit" type="submit"
                                                                                    className="btn sub_btn"
                                                                                    value="Post Comment" /></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 offset-lg-1 cus_pad_right">
                        <BlogSidebar/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogDetailsBody;