import React from 'react';
import _ from 'lodash';
// import moment from 'moment-strftime';

import components, {Layout} from '../components/index';
import safePrefix from '../utils/safePrefix';
import htmlToReact from '../utils/htmlToReact';

export default class WorkPortfolio extends React.Component {
    getList(post, post_idx) {
      let linkAttributes = {}
      if (_.get(post, 'frontmatter.is_external')) {
        linkAttributes.target = "_blank";
        linkAttributes.rel = "noopener noreferrer";
      }
      return (
        <article key={post_idx} className="work-card">
          <div className="">
            <div className="container is-fluid is-vcentered">
              <h2 className="post-title is-marginless">{_.get(post, 'frontmatter.title')}</h2>
              <p className="post-subtitle">{_.get(post, 'frontmatter.subtitle')}</p>
            </div>
            <div className="container is-fluid">
              {htmlToReact(_.get(post, 'frontmatter.description'))}
              <div className="columns">
                {_.map(_.get(post, 'frontmatter.content_images'), url => {
                    return (
                      <div className="column" key={safePrefix(url)}>
                        <img className="thumbnail" src={safePrefix(url)} alt={safePrefix(url)} />
                      </div>
                    )
                })}
              </div>
              <a {...linkAttributes} className="button is-primary is-outlined mt-1" href={safePrefix(_.get(post, 'url'))}>Read more</a>
            </div>
          </div>
        </article>
      )
    }

    render() {
        let display_posts = _.orderBy(_.get(this.props, 'pageContext.pages').filter(page => page.relativeDir === 'works'), 'frontmatter.start_date', 'desc');
        const featured_posts = display_posts.filter(page => _.get(page, 'frontmatter.is_featured'))
        const non_featured_posts = display_posts.filter(page => !_.get(page, 'frontmatter.is_featured'))
        return (
            <Layout {...this.props}>
              <header className="post-header">
                <h1 className="title is-1">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                <div className="subtitle is-4">
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
