# IPNS-Link Browser Extension / Add-on

Redirects requests for `/ipns/*` paths and `*.ipns` domains to the [IPNS-Link front-desk](https://github.com/ipns-link/load-balancer). Tested on Chrome, Edge, Firefox.

## Table of Contents  
[![tocgen](https://img.shields.io/badge/Generated%20using-tocgen-blue)](https://github.com/SomajitDey/tocgen)  
  - [IPNS-Link Browser Extension / Add-on](#ipns-link-browser-extension--add-on)  
      - [Installation](#installation)  
          - [Chrome](#chrome)  
          - [Edge](#edge)  
          - [Firefox](#firefox)  
      - [Test](#test)  
#####   

### Installation

`git clone github.com/ipns-link/browser-add-on`

##### Chrome

1. Go to `chrome://extensions/`
2. Toggle `Developer mode` to `on`
3. Choose `Load unpacked`
4. Select the project directory from the new window that opens

##### Edge

1. Go to `edge://extensions/`
2. Toggle `Developer mode` to `on`
3. Choose `Load unpacked`
4. Select the project directory from the new window that opens

##### Firefox

1. Go to `about:debugging`
2. Choose `This Firefox`
3. Choose `Load Temporary Add-on`
4. Select the `manifest.json` file within the project directory, in the new window that opens

### Test

Click on these links and note the redirect:

https://example.ipns

http://example.ipns/path

https://example.com/ipns/path