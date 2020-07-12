import React from 'react';
import _ from 'lodash';
import htmlToReact from '../utils/htmlToReact';

import {Layout} from '../components/index';
import safePrefix from '../utils/safePrefix';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post page post-full">
                <header className="post-header is-marginless">
                  <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                  </div>
                  }
                </header>
                {_.get(this.props, 'pageContext.frontmatter.img_path') && 
                <div className="post-thumbnail">
                  <img className="thumbnail" src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                </div>
                }
                <div className="post-content">
                  {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
                <div className="container is-fluid">
                  <div className="columns">
                    <div className="column">
                      <h2 className="pt-6">My trial on B&W Photography:</h2>
                    </div>
                    <div className="column">
                      <div className="grid-container">
                        {
                          _.map( _.get(this.props, 'pageContext.frontmatter.bandw_gallery'), (src) => {
                            return (
                              <figure className="grid-card">
                                <img src={safePrefix(src)} alt={safePrefix(src)} />
                              </figure>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container is-fluid">
                  <div className="columns">
                    <div className="column">
                      <h2 className="pt-6">Colored Photography:</h2>
                    </div>
                    <div className="column">
                      <div className="grid-container">
                        {
                          _.map( _.get(this.props, 'pageContext.frontmatter.coloured_gallery'), (src) => {
                            return (
                              <figure className="grid-card">
                                <img src={safePrefix(src)} alt={safePrefix(src)} />
                              </figure>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Layout>
        );
    }
}
