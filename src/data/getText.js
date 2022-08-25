function parseText(json, setText) {
    let text = '';
    json.map(item => text += item);
    setText(text);
}

export async function getText(setText) {
    const URL = 'https://baconipsum.com/api/?type=all-meat&paras=50&start-with-lorem=20'
    try {
        const response = await fetch(URL, {
          method: "GET",
        });
        const json = await response.json();
        parseText(json, setText);
      } catch (e) {
        alert(String(e));
      }
}