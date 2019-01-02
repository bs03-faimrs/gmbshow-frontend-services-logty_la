/**
 * Page.js
 *
 * Page class that abstracts common parameters for all pages in the website
 *
 * @author Olaolu Akinsete,
 *
 */

import { BaseWebPage, Route, Url } from "featureTypes"
/**
 * Create Pages
 *
 * @param {Route} path
 * @returns {WebPage}
 */
export default function makePage(path: Route): BaseWebPage {
  const basePage: {|
    apiUrl: Url,
    baseUrl: Url,
    apiVersion: string,
    locale: string
  |} = {
    apiUrl: "http://localhost:4000/api",
    baseUrl: "http://localhost:8000",
    apiVersion: "v1",
    locale: "/en"
  }

  /**
   *  getUrl of page
   *
   * @returns {Url}
   */
  const getUrl = (): Url => (basePage.baseUrl + path: Url)

  /**
   * getRoute of page
   *
   * @returns {Route}
   */
  const getRoute = (): Route => path

  return Object.freeze({
    basePage,
    getUrl,
    getRoute
  })
}
