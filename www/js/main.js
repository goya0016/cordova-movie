const app={
    active: 'home',
    pages:[],
    init: ()=>{
        let page= document.querySelector('.page');
        history.replaceState({}, "Home","#first");
        window.addEventListener("popstate", app.popstate);
        document.querySelector('button').addEventListener('click', app.submit);
        document.getElementById("person").addEventListener("keypress",function(ev){
            if(ev.keyCode === 13){
                app.submit(ev);
                event.preventDefault();
            }
        })
    },
    submit:(ev)=>{
        ev.preventDefault();
        window.scrollTo(0,0);
        let query=document.getElementById('person').value;
        let url1= `https://api.themoviedb.org/3/search/person?api_key=c3db0addbebf4537321614720df2777e&language=en-US&query=${query}&include_adult=false`
        if (query==""){
            alert("Please type Something in the search box.")
        }else{
        let second=  document.getElementById('second');
        while (second.firstChild) {
            second.removeChild(second.firstChild);
                }
        let currentpage=ev.target.getAttribute('data-target');
            document.getElementById('first').classList.remove('active');
            document.getElementById('second').classList.add("active");
        let third=  document.getElementById('third');
        let fourth=  document.getElementById('fourth');
        let ol= document.createElement('ol');
        let h2=document.createElement("h1");
        fetch(url1)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            console.log(data);
            let svg= document.createElement('img');
            svg.setAttribute('src', "img/search.svg");
            svg.setAttribute('alt', "svg");
            svg.setAttribute('class', "svg");
            second.appendChild(svg);
            svg.addEventListener("click", function(ev){
                window.history.go(-1);
            })
            data.results.forEach(element => {
                let name= element.name;
                let a= document.createElement('a');
                let li= document.createElement('li');
                if(element.profile_path==null){
                    let profile="img/user.svg";
                    let img1=document.createElement("img");
                    let br= document.createElement('br');
                    img1.setAttribute("src", profile);
                    img1.setAttribute("class", "user");
                    img1.setAttribute("alt", "Profile Image Not provided");
                    a.textContent=name;
                    a.appendChild(img1);
                    img1.insertAdjacentElement("afterend",br);
                    li.appendChild(a);
                }else{
                    let br= document.createElement('br');
                    let br1= document.createElement('br');
                    let img1=document.createElement("img");
                    let profile="https://image.tmdb.org/t/p/w185"+element.profile_path;
                    img1.setAttribute("src", profile);
                    img1.setAttribute("alt", "Profile Image Not provided");
                    second.appendChild(ol);
                    a.textContent=name;
                    a.insertAdjacentElement("beforeend",img1);
                    img1.insertAdjacentElement("afterend",br);
                    li.appendChild(a);
                    li.insertAdjacentElement("afterend",br1);
                    a.setAttribute('href','#third');
                }
                
                ol.appendChild(li);
                li.addEventListener('click',function(ev){
                    window.scrollTo(0,0);
                    let svg1= document.createElement('img');
                    svg1.setAttribute('src', "img/search.svg");
                    svg1.setAttribute('alt', "svg");
                    svg1.setAttribute('class', "svg");
                    third.appendChild(svg1);
                    svg1.addEventListener("click", function(ev){
                        app.delete();
                        window.history.go(-2);
                    })
                    
                    if(ev.target){
                        let ul=document.createElement('ul');
                        
                        element.known_for.forEach(movie=>{
                            if(element.known_for.media_type==movie){}
                            if(element.known_for.length==0){
                                window.alert("No movie found for thr person.");

                            };
                            console.log(movie.original_title||movie.title||movie.original_name);
                            h2.textContent= element.name; 
                            let movieid=movie.id;
                            let brtag= document.createElement('br'); 
                            let posterimage= document.createElement("img");
                            let path= "https://image.tmdb.org/t/p/w185"+movie.poster_path;
                            posterimage.setAttribute('src', path);
                            posterimage.setAttribute("alt","poster");
                            let li2= document.createElement('li');
                            let a2= document.createElement('a');
                            a2.textContent= (movie.original_title||movie.title||movie.original_name);
                            document.getElementById('second').classList.remove('active');
                            document.getElementById('third').classList.add("active");
                            third.appendChild(h2);
                            a2.appendChild(posterimage);
                            posterimage.insertAdjacentElement("beforebegin",brtag);
                            li2.appendChild(a2);
                            third.appendChild(ul).appendChild(li2);
                            
                            ul.setAttribute("class","firstul");
                            
                            a2.setAttribute('href','#fourth');
                            
                            
                            li2.addEventListener('click',function(ev){
                            
                                let url2=`https://api.themoviedb.org/3/movie/${movieid}?api_key=c3db0addbebf4537321614720df2777e&language=en-US`
                                let url3= `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=c3db0addbebf4537321614720df2777e`
                                fetch(url2)
                                .then(re=>{
                                    return re.json();
                                })
                                .then(d=>{
                                    console.log(d);
                                    let svg2= document.createElement('img');
                                    svg2.setAttribute('src', "img/search.svg");
                                    svg2.setAttribute('alt', "svg");
                                    svg2.setAttribute('class', "svg");
                                    fourth.appendChild(svg2);
                                    svg2.addEventListener("click", function(ev){
                                       app.deleted();
                                        window.history.go(-3);
                                    })
                                    let ul2=document.createElement('ul');
                                    if(d.status_code!==34){
                                        
                                        let poster= "https://image.tmdb.org/t/p/w342"+d.poster_path;
                                        let h1= document.createElement('h1');
                                        let img= document.createElement('img');
                                        let li4= document.createElement('li');
                                        let li5= document.createElement('li');
                                        let li6= document.createElement('li');
                                        let li7= document.createElement('li');
                                        let li8= document.createElement('li');
                                        let li9= document.createElement('li');
                                        let li11= document.createElement('li');
                                        let li12= document.createElement('li');
                                        let li13= document.createElement('li');
                                        h1.textContent="Title: "+ d.title;
                                        img.setAttribute('src',poster);
                                        img.setAttribute('alt',"poster");
                                        li4.textContent="Duration: "+d.runtime+" minutes";
                                        li5.textContent="Overview: "+d.overview;
                                        li6.textContent="Popularity: "+d.popularity;
                                        li7.textContent="Release Date: "+ d.release_date;
                                        li8.textContent="Revenue Earned: $ "+ d.revenue;
                                        li9.textContent="Language: "+d.original_language;
                                        li11.textContent="Tagline: "+d.tagline;
                                        li12.textContent="Voted Average: "+d.vote_average;
                                        li13.textContent="Number of votes: "+d.vote_count;
                                        ul2.appendChild(h1);
                                        ul2.appendChild(img).insertAdjacentElement("afterend",li4).insertAdjacentElement("afterend",li5).insertAdjacentElement("afterend",li6).insertAdjacentElement("afterend",li7).insertAdjacentElement("afterend",li8).insertAdjacentElement("afterend",li9).insertAdjacentElement("afterend",li11).insertAdjacentElement("afterend",li12).insertAdjacentElement("afterend",li13);
                                        
                                        
                                        ul2.setAttribute("class","secondul");
                                        
                                        d.genres.forEach(genre=>{
                                            console.log(genre.name);
                                            let li14= document.createElement("li");
                                            li14.textContent= "Genre: "+genre.name;
                                            li13.insertAdjacentElement("afterend",li14);
                                        });
                                        fourth.appendChild(ul2);
                                        document.getElementById('third').classList.remove('active');
                                        document.getElementById('fourth').classList.add("active");
                                    }else{
                                        alert("The details for this movie were not found in the database.")
                                }
                                    
                                fetch(url3)
                                .then(res=>{
                                    return res.json();
                                })
                                .then(cast=>{
                                    console.log(cast);
                                    let ul3=document.createElement('ul');
                                    ul3.textContent="Cast: "
                                    cast.cast.forEach(casts=>{
                                 if(casts.profile_path==null){
                                    let list= document.createElement('li');
                                    let br2= document.createElement('br'); 
                                        list.textContent= casts.name;
                                        let castimage= "img/user.svg"
                                        let image= document.createElement('img');
                                        image.setAttribute('src',castimage);
                                        image.setAttribute('alt',"Cast image Not provided");
                                        image.setAttribute("class", "user");
                                        list.insertAdjacentElement("afterbegin",image);
                                        image.insertAdjacentElement("afterend",br2);
                                        ul3.appendChild(list);
                                        
                                }else{
                                        console.log(casts.name);   
                                       let br2= document.createElement('br'); 
                                        let list= document.createElement('li');
                                        list.textContent= casts.name;
                                        let castimage= "https://image.tmdb.org/t/p/w92"+casts.profile_path;
                                        let image= document.createElement('img');
                                        image.setAttribute('src',castimage);
                                        image.setAttribute('alt',"Cast image Not provided");
                                        image.setAttribute("class", "user");
                                        list.insertAdjacentElement("afterbegin",image);
                                        image.insertAdjacentElement("afterend",br2);
                                        ul3.appendChild(list);
                                    }
                                    ul2.insertAdjacentElement("afterend",ul3);
                                    ul3.setAttribute("class","thirdul");
                                    })
        
                                    
                                })
                            })
                        })
                        
                        })
                    }
                    history.pushState({},third, "#third");
                });    
            });
            history.pushState({},second,"#second");
            
        })
        .catch(err=> console.log(err));
        }    
    }, 
        popstate: function(ev){
            console.log(location.hash, "popstate running");
            let hashvalue=location.hash.replace("#","");
            document.querySelector('.active').classList.remove('active');
            document.getElementById(hashvalue).classList.add("active");
            document.querySelector("form").reset();
            if(location.hash=="#second"){
                console.log("a");
                app.delete();
            }
            else if(location.hash=="#third"){
                app.deleted();
            }
            // window.scroll(0,0);

        },
        delete: function(){
              let thir = document.getElementById("third");
            thir.innerHTML="";
        },
        deleted:function(){
            let four = document.getElementById("fourth");
            four.innerHTML="";
        }
    }


document.addEventListener("DOMContentLoaded",app.init);