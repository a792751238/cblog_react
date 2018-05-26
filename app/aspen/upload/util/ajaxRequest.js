/**
 * Created by easterCat on 2018/3/14.
 */
function createAjaxRequest(method, url) {
    let xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr) {
        xhr.open(method, url, true)
    } else if (typeof XDomainRequrest !== 'undefined') {
        xhr = new XDomainRequrest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

export default function ajaxUpload({
                                       url,
                                       name,
                                       cors,
                                       file,
                                       onProgress,
                                       onLoad,
                                       onError,
                                       withCredentials,
                                       params = {}
                                   }) {
    let data = new FormData()
    Object.keys(params).forEach((k) => {
        data.append(k, params[k])
    })
    data.append(name, file)

    let xhr = createAjaxRequest('post', url, cors)
    xhr.withCredentials = withCredentials;
    xhr.upload.addEventListener('progress', onProgress, false);
    xhr.onload = onLoad;
    xhr.onerror = onError;
    xhr.send(data);

    return xhr;
}