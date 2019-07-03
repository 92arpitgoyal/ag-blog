import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import components, {LayoutTwo} from '../components/index';
import safePrefix from '../utils/safePrefix';

export default class Notfound extends React.Component {
    render() {
        return (
            <LayoutTwo {...this.props}>
                <main class="image-container">
                    <img src="../images/arpit-goyal.png" />
                    <section class="section hero is-fullheight">
                        <div class="hero-body has-text-white">
                            <div class="container is-fluid">
                                <div class="columns">
                                    <div class="column is-one-quarters no-padding">
                                    </div>
                                    <div class="column is-three-quarters">
                                        <section class="section">
                                            <h1 class="title has-text-white">Arpit Goyal</h1>
                                            <h2 class="subtitle is-size-4 has-text-white">Product Manager | Engineer with an eye for design</h2>
                                        </section>
                                        <section class="section is-paddingless-vertical">
                                            <div class="tile is-ancestor">
                                                <div class="tile is-horizontal is-parent">
                                                    <a href="/work" class="tile is-child box things-i-do">
                                                        <img src="../images/code.png" alt="Illustration" />
                                                        <p class="title">Build</p>
                                                        <p>I build products.<br />Code & design.</p>
                                                    </a>
                                                </div>
                                                <div class="tile is-horizontal is-parent">
                                                    <a href="//blog.arpitgoyal.com" class="tile is-child box things-i-do">
                                                        <img src="../images/write.png" alt="Illustration" />
                                                        <p class="title">Blog</p>
                                                        <p>I write, and<br />share my opinions</p>
                                                    </a>
                                                </div>
                                                <div class="tile is-horizontal is-parent is-hidden-mobile">
                                                    <div class="tile is-child box things-i-do coming-soon">
                                                        <img src="../images/everything.png" alt="Illustration" />
                                                        <p class="title three"></p>
                                                        <p>Travelling, Cycling,<br />everything else</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="/resume" target="_blank" rel="noopener noreferrer" class="is-link negative-margin-top has-text-white level is-flex-mobile level-left is-inline-flex">
                                                    <span class="c">look at my résumé here</span>
                                                    <svg class="i" height="12px" id="Capa_1" style="enable-background:new 0 0 80 80;" version="1.1" viewBox="0 0 80 80" width="12px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <g>
                                                            <path d="M29.298,63.471l-4.048,4.02c-3.509,3.478-9.216,3.481-12.723,0c-1.686-1.673-2.612-3.895-2.612-6.257   s0.927-4.585,2.611-6.258l14.9-14.783c3.088-3.062,8.897-7.571,13.131-3.372c1.943,1.93,5.081,1.917,7.01-0.025   c1.93-1.942,1.918-5.081-0.025-7.009c-7.197-7.142-17.834-5.822-27.098,3.37L5.543,47.941C1.968,51.49,0,56.21,0,61.234   s1.968,9.743,5.544,13.292C9.223,78.176,14.054,80,18.887,80c4.834,0,9.667-1.824,13.348-5.476l4.051-4.021   c1.942-1.928,1.953-5.066,0.023-7.009C34.382,61.553,31.241,61.542,29.298,63.471z M74.454,6.044   c-7.73-7.67-18.538-8.086-25.694-0.986l-5.046,5.009c-1.943,1.929-1.955,5.066-0.025,7.009c1.93,1.943,5.068,1.954,7.011,0.025   l5.044-5.006c3.707-3.681,8.561-2.155,11.727,0.986c1.688,1.673,2.615,3.896,2.615,6.258c0,2.363-0.928,4.586-2.613,6.259   l-15.897,15.77c-7.269,7.212-10.679,3.827-12.134,2.383c-1.943-1.929-5.08-1.917-7.01,0.025c-1.93,1.942-1.918,5.081,0.025,7.009   c3.337,3.312,7.146,4.954,11.139,4.954c4.889,0,10.053-2.462,14.963-7.337l15.897-15.77C78.03,29.083,80,24.362,80,19.338   C80,14.316,78.03,9.595,74.454,6.044z" fill="#ffffff" />
                                                        </g>
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                        <g />
                                                    </svg>
                                                </a>
                                            </div>
                                        </section>
                                        <section class="section social">
                                            <div class="level">
                                                <a href="https://medium.com/@arpit_goyal" target="_blank" rel="noopener noreferrer" class="is-link  negative-margin-top has-text-white level is-flex-mobile is-inline-flex level-left">
                                                    <svg class="i" enable-background="new -91 49.217 56.693 56.693" id="Layer_1" version="1.1" viewBox="-91 49.217 56.693 56.693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px">
                                                        <path d="M-62.4995,54.3363c-13.5995,0-24.6249,11.0234-24.6249,24.623c0,13.5997,11.0254,24.625,24.6249,24.625  c13.5986,0,24.624-11.0253,24.624-24.625C-37.8755,65.3597-48.9009,54.3363-62.4995,54.3363z M-48.531,70.6566h-1.1218  c-0.4166,0-1.0054,0.6008-1.0054,0.9854v13.9409c0,0.3851,0.5889,0.91,1.0054,0.91h1.1218v3.3091h-10.1636v-3.3091h2.1273V71.8384  h-0.1042l-4.9675,17.9635h-3.846l-4.9035-17.9635h-0.1241v14.6544h2.1273v3.3091h-8.509v-3.3091h1.0895  c0.4488,0,1.0377-0.5249,1.0377-0.91V71.642c0-0.3846-0.5889-0.9854-1.0377-0.9854h-1.0895v-3.3091h10.6401l3.4934,12.9999h0.0961  l3.5257-12.9999h10.6082V70.6566z" fill="#ffffff" /></svg>
                                                    <span class="c">I've written some articles on Medium</span>
                                                </a>
                                            </div>
                                            <div class="level">
                                                <a href="https://twitter.com/_arpitgoyal" target="_blank" rel="noopener noreferrer" class="is-link  negative-margin-top has-text-white level is-flex-mobile is-inline-flex level-left">
                                                    <svg class="i" enable-background="new 0 0 56.693 56.693" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <path d="M28.348,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.623-11.023,24.623-24.623  C52.971,16.184,41.947,5.157,28.348,5.157z M40.752,24.817c0.013,0.266,0.018,0.533,0.018,0.803c0,8.201-6.242,17.656-17.656,17.656  c-3.504,0-6.767-1.027-9.513-2.787c0.486,0.057,0.979,0.086,1.48,0.086c2.908,0,5.584-0.992,7.707-2.656  c-2.715-0.051-5.006-1.846-5.796-4.311c0.378,0.074,0.767,0.111,1.167,0.111c0.566,0,1.114-0.074,1.635-0.217  c-2.84-0.57-4.979-3.08-4.979-6.084c0-0.027,0-0.053,0.001-0.08c0.836,0.465,1.793,0.744,2.811,0.777  c-1.666-1.115-2.761-3.012-2.761-5.166c0-1.137,0.306-2.204,0.84-3.12c3.061,3.754,7.634,6.225,12.792,6.483  c-0.106-0.453-0.161-0.928-0.161-1.414c0-3.426,2.778-6.205,6.206-6.205c1.785,0,3.397,0.754,4.529,1.959  c1.414-0.277,2.742-0.795,3.941-1.506c-0.465,1.45-1.448,2.666-2.73,3.433c1.257-0.15,2.453-0.484,3.565-0.977  C43.018,22.849,41.965,23.942,40.752,24.817z" fill="#ffffff" /></svg>
                                                    <span class="c">I tweet, sometimes</span>
                                                </a>
                                            </div>
                                            <div class="level">
                                                <a href="https://www.quora.com/profile/Arpit-Goyal-14" target="_blank" rel="noopener noreferrer" class="is-link  negative-margin-top has-text-white is-flex-mobile is-inline-flex level level-left">
                                                    <svg class="i" version="1.1" viewBox="0 0 24 24" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <title />
                                                        <desc />
                                                        <defs />
                                                        <g fill="none" fill-rule="evenodd" id="miu" stroke="none" stroke-width="1">
                                                            <g id="Artboard-1" transform="translate(-683.000000, -659.000000)">
                                                                <g id="slice" transform="translate(215.000000, 119.000000)" />
                                                                <path d="M695,682 C701.075133,682 706,677.075133 706,671 C706,664.924867 701.075133,660 695,660 C688.924867,660 684,664.924867 684,671 C684,677.075133 688.924867,682 695,682 Z M700.05295,673.542371 C701.732112,669.461278 698.397307,666.159102 694.768667,666 C694.061723,666.080693 693.383797,666.10414 692.821785,666.415189 C691.464558,666.974408 690.237143,668.303865 689.762488,669.736701 C688.488035,673.58287 692.04963,677.652239 696.228828,676.863883 C697.031069,678.126806 699.22154,678.178571 699.22154,678.178571 L699.218485,677.348194 C699.218485,677.348194 698.019934,676.992687 697.827965,676.241175 C698.661055,675.376084 699.551416,674.761598 700.05295,673.542371 Z M697.208774,674.511145 C697.162499,674.534135 697.116225,674.557277 697.069798,674.580267 C696.337809,673.313081 694.462859,673.294963 694.462859,673.294963 L694.462859,674.402133 C694.462859,674.402133 695.404075,674.78809 695.540302,675.486771 C695.586576,675.532903 695.633003,675.579035 695.679278,675.625167 C691.897001,676.7873 690.483572,668.936925 694.080141,667.401015 C694.650094,667.027695 695.494944,667.212376 696.02687,667.47029 C698.58448,668.953216 698.586008,672.078476 697.208774,674.511145 Z" fill="#ffffff" id="circle-social-quora-glyph" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    <span class="c">Some answers on Quora</span>
                                                </a>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </LayoutTwo>
        );
    }
}
