// Based on https://github.com/zeit/next.js/tree/canary/examples/with-react-native-web
// and https://github.com/expo/expo-cli/blob/main/packages/webpack-config/web-default/index.html
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'
import { AppRegistry } from 'react-native'
import Tamagui from '../tamagui.config'

export async function getInitialProps({ renderPage }) {
  AppRegistry.registerComponent('Main', () => Main)
  const { getStyleElement } = AppRegistry.getApplication('Main')
  const page = await renderPage()
  const styles = [
    getStyleElement(),
    // @ts-ignore
    <style
      key="qwer-styles"
      dangerouslySetInnerHTML={{ __html: Tamagui.getCSS() }}
    />,
  ]
  return { ...page, styles: React.Children.toArray(styles) }
}

export class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

Document.getInitialProps = getInitialProps

export default Document
