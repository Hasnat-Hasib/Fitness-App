export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '380269b996msh36710e45d285271p199598jsn9a35f9751fda',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const fetchData = async (url, options)=> {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}