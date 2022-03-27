function selectStr(){
    var selectedtxt=document.getSelection()
    if (selectedtxt=="DNS_PROBE_FINISHED_NXDOMAIN"){
        
        innerHTMLtxt.innerHTML='<input type="text" id="ytbid" name="ytbid"><input type="button" id="search" value="送信する" onclick="restartIt()"><br>';
        
    }
}
function restartIt(){
    const youtubeid = document.getElementById("ytbid").value;
    outpuutf.innerHTML = youtubeid;
    let output ='<iframe width="660" height="371" src="https://www.youtube.com/embed/' + youtubeid + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';
    document.getElementById("outpuutf").innerHTML = output;
 
}
function changedomain(){
    const doma = document.domain
    hostname.innerText = doma
    let osw = '<p id="domainnam">' + doma + ' にタイプミスがないか確認してください。</p>'
    document.getElementById("domainnam").innerHTML = osw
}
document.title += document.domain
changedomain();

//呼び出せていない