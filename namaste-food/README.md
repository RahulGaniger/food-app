#vid-1
    -Started with html and css
    -added react and rect dom using CDN links
    -connected js to html file for content rendering

#EP:6
-microservices and monolithic architecture design differences
-cors errors
-shimmer ui
-conditional rendering
-why do we need state variables(login/logout example)
-learned about useEffect Hook
-how search functionality works

EP-7
- every time my components renders useeffect will be called
- it will hv a callback function and dependency array
- dependency array is not mandatory
- if dependency array is not present -> useeffect will be called on each render of component
- if the dependency [] is empty -> useEffect will be called only on initial render(just once)
- if the dependency [] hv something (state variables) -> useEffect will be called on each update of the value