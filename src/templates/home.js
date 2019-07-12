import React from 'react';
import _ from 'lodash';
// import moment from 'moment-strftime';

import {LayoutTwo} from '../components/index';
import safePrefix from '../utils/safePrefix';

export default class Notfound extends React.Component {
    render() {
        return (
            <LayoutTwo {...this.props}>
                <div className="has-bg is-home">
                    <main className="image-container">
                        <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.illustration_image' ))} alt="Illustration" />
                        <section className="section hero is-fullheight is-paddingless">
                            <div className="hero-body has-text-white">
                                <div className="container is-fluid">
                                    <div className="columns">
                                        <div className="column is-one-quarters no-padding" />
                                        <div className="column is-three-quarters">
                                            <section className="section">
                                                <h1 className="title has-text-white">Arpit Goyal</h1>
                                                <span></span>
                                                <h2 className="subtitle is-size-4 has-text-white is-marginless">
                                                    Product Manager | Engineer with an eye for design
                                                </h2>
                                            </section>
                                            <section className="section is-paddingless-vertical">
                                                <div className="tile is-ancestor">
                                                    <div className="tile is-horizontal is-parent">
                                                        <a href="/work-portfolio" className="tile is-child box things-i-do">
                                                            <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.build_image' ))} alt="Build Products" />
                                                            <p className="title">Build</p>
                                                            <p className="is-marginless">
                                                                I build products.<br />Code &amp; design.
                                                            </p>
                                                        </a>
                                                    </div>
                                                    <div className="tile is-horizontal is-parent">
                                                        <a href="/blog" className="tile is-child box things-i-do">
                                                            <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.blog_image' ))} alt="Blogging" />
                                                            <p className="title">Blog</p>
                                                            <p className="is-marginless">
                                                                I write, and<br />share my opinions
                                                            </p>
                                                        </a>
                                                    </div>
                                                    <div className="tile is-horizontal is-parent is-hidden-mobile">
                                                        <div className="tile is-child box things-i-do coming-soon">
                                                            <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.everything_else_image' ))} alt="Everything else" />
                                                            <p className="title three" />
                                                            <p className="is-marginless">
                                                                Travelling, Cycling,<br />everything else
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href="/resume" target="_blank" rel="noopener noreferrer" className="is-link is-borderless negative-margin-top has-text-white level is-flex-mobile level-left is-inline-flex">
                                                        <span className="c">look at my résumé here</span>
                                                    </a>
                                                </div>
                                            </section>
                                            <section className="section social">
                                                <div className="level">
                                                    <a href="https://medium.com/@arpit_goyal" target="_blank" rel="noopener noreferrer" className="is-link is-borderless  negative-margin-top has-text-white level is-flex-mobile is-inline-flex level-left">
                                                        <img className="i" src={safePrefix(_.get(this.props, 'pageContext.frontmatter.medium_icon' ))} alt="medium" />
                                                        <span className="c">
                                                            I've written some articles on Medium
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="level">
                                                    <a href="https://twitter.com/_arpitgoyal" target="_blank" rel="noopener noreferrer" className="is-link is-borderless  negative-margin-top has-text-white level is-flex-mobile is-inline-flex level-left">
                                                        <img className="i" src={safePrefix(_.get(this.props, 'pageContext.frontmatter.twitter_icon' ))} alt="twitter" />
                                                        <span className="c">I tweet, sometimes</span>
                                                    </a>
                                                </div>
                                                <div className="level">
                                                    <a href="https://www.quora.com/profile/Arpit-Goyal-14" target="_blank" rel="noopener noreferrer" className="is-link is-borderless  negative-margin-top has-text-white is-flex-mobile is-inline-flex level level-left">
                                                        <img className="i" src={safePrefix(_.get(this.props, 'pageContext.frontmatter.quora_icon' ))} alt="quora" />
                                                        <span className="c">Some answers on Quora</span>
                                                    </a>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </LayoutTwo>
        );
    }
}
