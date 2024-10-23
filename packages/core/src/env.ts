import os from 'node:os'

/**
 * Indicates current environment. ("browser" | "node")
 */
export const env = globalThis.window ? 'browser' : 'node'

enum OSPlatform {
  Windows = 'windows',
  MacOS = 'macOS',
  Linux = 'linux',
  Mobile = 'mobile',
}

/**
 * get current OS type.
 * @returns "windows" | "macOS" | "linux" | "mobile"
 */
export function getCurrentPlatform(): OSPlatform | void {
  if (env === 'browser') {
    const agent: string = navigator.userAgent.toLowerCase()

    const isMobile = /iphone|ipod|ipad|android|mobile|blackberry|webos|incognito|webmate|bada|nokia|lg|ucweb|skyfire|micromessenger/i
      .test(agent)
    const isMac: boolean = /macintosh|mac os x/i.test(agent)
    const win32: boolean = agent.includes('win32') || agent.includes('wow32')
    const win64: boolean = agent.includes('win64') || agent.includes('wow64')

    if (isMobile) {
      return OSPlatform.Mobile
    }

    if (win32 || win64) {
      return OSPlatform.Windows
    }

    if (isMac) {
      return OSPlatform.MacOS
    }
    else {
      return OSPlatform.Linux
    }
  }
  else {
    const platform = os.platform()
    // put unix into linux
    if (['linux', 'openbsd', 'freebsd'].includes(platform)) {
      return OSPlatform.Linux
    }
    else if (platform === 'win32') {
      return OSPlatform.Windows
    }
    else if (platform === 'darwin') {
      return OSPlatform.MacOS
    }
    else if (platform === 'android') {
      return OSPlatform.Mobile
    }
  }
}
