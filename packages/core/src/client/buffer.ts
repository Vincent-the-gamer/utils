/**
 * file to ArrayBuffer using FileReader
 * @param file 
 * @returns arraybuffer
 */
export function fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve) => {
        let reader = new FileReader()
        reader.onload = (result: any) => {
            resolve(result.target.result)
        }
        reader.readAsArrayBuffer(file)
    })
}

/**
 * file to AudioBuffer using FileReader 
 * @param file 
 * @returns audiobuffer
 */
export async function fileToAudioBuffer(file: File): Promise<AudioBuffer>{
    const arrayBuffer = await fileToArrayBuffer(file)
    const audioContext = new AudioContext()
    return new Promise((resolve) => {
        audioContext.decodeAudioData(arrayBuffer, audioBuffer => {
            resolve(audioBuffer)
        })
    })
}