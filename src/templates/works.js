import React from 'react';
import _ from 'lodash';
// import moment from 'moment-strftime';

import components, {Layout} from '../components/index';
import safePrefix from '../utils/safePrefix';
import htmlToReact from '../utils/htmlToReact';

export default class ProductPortfolio extends React.Component {
    getList(post, post_idx) {
      let linkAttributes = {}
      if (_.get(post, 'frontmatter.is_external')) {
        linkAttributes.target = "_blank";
        linkAttributes.rel = "noopener noreferrer";
      }
      return (
        <article key={post_idx} className="post post-card">
          <div className="post-card-inside">
            {_.get(post, 'frontmatter.thumb_img_path') && 
              (
                <a {...linkAttributes} className="post-card-thumbnail" href={safePrefix(_.get(post, 'url'))}>
                  <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                </a>
              )
            }
            {/*<div className="post-card-content">*/}
              <div className="container is-fluid">
                <div className="columns is-vcentered">
                  <div className="column is-three-fifths">
                    <header className="post-header is-marginless">
                      {/*<div className="post-meta">
                        <time className="published"
                        dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                      </div>*/}
                      <h2 className="post-title is-marginless">
                        <a {...linkAttributes} href={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</a>
                      </h2>
                    </header>
                  </div>
                  <div className="column is-two-fifths">
                    <div className="post-excerpt">
                      <p>{_.get(post, 'frontmatter.excerpt')}</p>
                      <p className="read-more">
                        <a {...linkAttributes} className="button is-primary is-outlined" href={safePrefix(_.get(post, 'url'))}>Take a look</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            {/*</div>*/}
          </div>
        </article>
      )
    }

    render() {
        let display_posts = _.orderBy(_.get(this.props, 'pageContext.pages').filter(page => page.relativeDir === 'works'), 'frontmatter.date', 'desc');
        const featured_posts = display_posts.filter(page => _.get(page, 'frontmatter.is_featured'))
        const non_featured_posts = display_posts.filter(page => !_.get(page, 'frontmatter.is_featured'))
        return (
            <Layout {...this.props}>
              <header className="post-header">
                <h1 className="post-title">Work portfolio</h1>
                {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                <div className="post-subtitle">
                  {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                </div>
                }
              </header>
              {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                  let GetSectionComponent = components[_.get(section, 'component')];
                  return (
                    <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                  )
              })}
              <div className="post-feed">
                <div className="layout-list">
                {_.map(featured_posts, (post, post_idx) => (
                  this.getList(post, post_idx)
                ))}
                </div>
                {_.map(non_featured_posts, (post, post_idx) => (
                  this.getList(post, post_idx)
                ))}
              </div>
            </Layout>
        );
    }
}
