function getAllToken(text, regex, useCapture)
{
  var match;
  var matches = new Array();
  do
  {
    match = regex.exec(text);
    if(match && useCapture)
    {
      for (var i = 1; i < match.length; i++)
      {
        matches.push(match[i]);
      }
    }
    if(match && !useCapture)
    {
      matches.push(match[0]);
    }
  } while(match);
  return matches;
}
