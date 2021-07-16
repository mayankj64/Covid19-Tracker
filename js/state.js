    
  fetch('https://api.covid19india.org/data.json')
  .then((data) => data.json())
  .then((result) =>{
    const corona = result.statewise;
    console.log(corona);
    document.write('<h2><p style="text-align:center;border-radius: 10px;box-shadow: 0px 8px 16px rgba(0,0,0,0.6) ;text-shadow: 0px 8px 10px rgba(0,0,0,0.5) ;width:50%;margin-left:auto;margin-right:auto;height:40px;padding-top:10px;"><b>Corona Virus, India All State Cases</b></p></h2>');
    document.write('<p style="color:white;">ch iauiueu<a href="state.html"><button style="width:100px;padding:9px;padding">BACK</button></a>s<a href="getStateData.html"><button style="width:100px;padding:9px;">REFRESH</button></a></p>');
    document.write('<table border="2" style="font-size:20px;border-collapse: collapse;padding: 8px;width:90%;background:whitesmoke;margin-left:auto;margin-right:auto;">');
    document.write('<tr>');
    document.write('<td>');
    document.write('<b><font size="4">LAST UPDATE TIME</b>');
    document.write('</td>');
    document.write('<td>');
    document.write('<b><font size="4">STATES</b>');
    document.write('</td>');
    document.write('<td>');
    document.write('<b><font size="4">ACTIVE CASES</b>');
    document.write('</td>');
    document.write('<td>');
    document.write('<b><font size="4">CONFIRMED CASES</b>');
    document.write('</td>');
    document.write('<td>');
    document.write('<b><font size="4">DEATHS</b>');
    document.write('</td>');
    document.write('<td>');
    document.write('<b><font size="4">RECOVERED</b>');
    document.write('</td>');
    document.write('</tr>');

    // Data Fechting
  for(var i=1;i<38;i++){
    document.write('<tr>');
    document.write('<td>');
    document.write(corona[i]['lastupdatedtime']);
    document.write('</td>');
    document.write('<td>');
    document.write(corona[i]['state']);
    document.write('</td>');
    document.write('<td>');
    document.write(corona[i]['active']);
    document.write('</td>');
    document.write('<td>');
    document.write(corona[i]['confirmed']);
    document.write('</td>');
    document.write('<td>');
    document.write(corona[i]['deaths']);
    document.write('</td>');
    document.write('<td>');
    document.write(corona[i]['recovered']);
    document.write('</td>');
    document.write('</tr>');
}
    // End of data fatching
    document.write('</table>');

  })
