(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1082:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return R}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),p=i,R=u["".concat(c,".").concat(p)]||u[p]||d[p]||n;return r?a.a.createElement(R,o(o({ref:t},s),{},{components:r})):a.a.createElement(R,o({ref:t},s))}));function R(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,c=new Array(n);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<n;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1093:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvsAAACCCAYAAADYMwduAAAcA0lEQVR42u2d+6+lV1nH+QP8RaNGIyYYMBA0KCEoUSIGAiqkBAKEahWkBAQKSBHkIsglxXJrihQLlkulUC6FAoXaUikplmJJ7wyl0BtDGUo77UwpdJj7dHs+m353n7POevfecy5zOfP5JE/OzN7vft/1XubMZz3rWWs/4AEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiInJYsXv3viv27t23yVjfsWvX3i+s12d4z97RZXv23rvJMIzDJ0aj0WfW7f+ru3ZfsXfP3k2GYRx5cUj+btu8ZduOBz7xxJGxvuPun23/yXr9j/We7fvu/OVnXTEyDOPwiQU2rtffSZtv37rjQb9y1MgwjCMvDsnfbcq+sq/sG4ah7Cv7hmEo+4ayr+wbhqHsK/uGYSj7hrKv7BuGoewbhqHsK/uGsq/sG4ayr+wbhqHsK/uGsq/sG4ayr+wbhqHsK/uGsm8YhrKv7BuGoewr+8q+sm8YhrKv7BuGoewbyr6ybxiGsq/sG4ah7BvKvrJvGIaybxiGsq/sG8q+sm8Yyr6ybxiGsq/sG8q+sm8Yyr6ybxiGsq/sG8q+YRjKvrJvGIayv1qy/6qTzhuddcGGwXjH6f87+osXfeSQEuA/P/a0Sfv4s7J/5Mn+E1//3dGZF20ZXffD7aNb7tg1jguv/uno1R+6ZfQbf3PVQReiP3rFteP2EX/1xu/N3D7bHvPOmw5Ke/f3+L929JWj40+7ZfTlK+6eXP+vX/uz0RvO2LTk+tdr0YtTvnj76Nkn3rjkGLzO+2/++I+mtvll7//B5DXaP3Scd332x6M/e/V1g+fEffr0xVtHN/xox/h8+HnOpXd123aw7k89V2X/8JX9Fxxzwui8cy4Z3XTDptGmWzaPfvD9H48u+O9LRy99/jsPCel55pNfM/rMJy4cxyN/95ip2/J+tuVzB7qtT/jjF0+Oz5+nbXvaKZ+bbFvjU2dcMPrXV39g9OiHPWfF7Xnwrz9t9Ng/fP6yPvual7+32z6Ctj/5cf940J8Nnt20ada29dngc8r+QZR9hHkWe/buG73wrZ87ZAT4Wa86c9I2/qzsHzmyj2Sedv7mqc8rHYCHvuBbB1WIjnrz9ZP2vOR9G+cRqDFvP+vWgyVwcx+fa7th488Hrz+S/Acv2dC9FtM4+5Kti46DcAOdiGltRoLzGu2fxcmfv23JvugkToOOx0EW7CXnquwffrL/8N9+1uhrF1459Vm75GvXjLc7mNLzTy85edKeWeLK+4HPHei2Hn3U6yfH58/TtqVjNY2f3r1tdOzRb1lRW66/7gejk9/+iWV9HimeBZ2Sg/lscG5h1rb12VjuNVH210D2z734u4uy+hdddvP9/wju2TF68FPepewr+wdV9pGusOVne8Z/R6bJ/t58287Je0OCqOyv7Phk7elMha9t+MVoyutO/+GiDsDlN2zrXotLv3vPomw7gr9z977J+zWLvlLZJyuf45x72U8WHYcRiHzmIcdeM3mPY/Ie94yfPGNhnhEaM/vK/rRA5APZfAQIQT715M+M7try08l7ZHGV/bWT/Z9v27Eoa37V5d+b7IP3Zo0QTJHFFYltlf3avksvud/T9u7Zu+yRgwOd2Vf2D1HZf8zfnrrk/bMvvHby/tOP/9iS9/kMwt37bFt6w3aUBD30qSdN3fYRz3zPZNsH/eU71kz2aQfnxHHm6cg84QUfWlI29PCnnzx66ss/Otc1UPZXJvt/8srvjPbsvXeSPW6z9w/8u6tGV910v3AOlWywHeLGzzZjjZgS84wMZD+Uqcwj+2zXO25PtsmMs48H/f3Vg8fnPcqZ2K7XhhoILcd+/Guvm+v4Q4HUh1PP3bxk1AUxD7Rrno7PsSff3M2gr1T26+hCrv/d2/aO3+NnrgOlP+EZJ9yw6DP1vV52n31wD7iu85SP8QxPKyVaTnDd2SfX+fdetGHmdjwH054rZX9tROLFzz1x8ix99cuXjR76m89Y9D4lJBH+nTt3DWb3H/P7zxs9/UmvWvJ5xArZ5b1ZpTfEI37n6PH27G8e2aeEZOi4rew/6U9fOt522ggFbaTsZ6gN7TmzHW2gTGalss/P9j0y5oESq96ozFGPP358DM6vbcc8sj/rHlXZ75UgzcruP+5RLxy3sW0bf+facex5no2VlDDV52SW7NOWXM959s1+17Kjc0TL/r+f+Y2u7CO9V163eMj82ptuHz35uNMXff7YN312dMfWbYu227lrz+j0L1yxROSR7ouv3Lh4WO2eHaN/+9BFi7ZtZR8JD8wxqPukPeG17zl//Br74vi0ox7nrf/51e61+b9rblnU6XnTqV8ZdxR4jRKnysZb7xod87pPKftrIPs1q99KWQLpes67bx5LVV5D+mpGN8JH1pb3H/Wyb48z0S10HKpEI5WRT+rVs59sy356ss+oAxntyfO/e9+SOvQqlNTB319Cd++4bAlRq4JJbXk6PmHzT3YvqS+n00JWe9G/v4XjU79e99nKPp+7dcuuiRjnOuQ6bduxryu3XH86BPzM/mfJPgLa60CstuwTJ3zy/vd5TlKrH5j3Ue8550j7ubd0mKo4Uw5URwu4Juy/zcjnHGr5WX0e6OzUz9Cu8LS3Xj+1jIdRlTr6kFGVtvPHMXg+6nPFqEqv46fsr21Wn8zsUG34c575pnHmtApNFW86DHw+5T6pr2eUoAVhrbKd7DBC+eH3nzPZT2/bekzmEdT9U+pS66+r0DFCseHqGxdlyd/yutOWdGpqpjp8Z8PNSzLqiGPdH9AhorZ9muwjhRwbmBeR6z1N9glKcNLZSqcGyfzoB88dvzbUjtqGStozdI+Yp0Gnax7ZP+Zpb1gizimp4XxqZ4U5CGn7u0/42PietaVidAyyb65R7sFQB4nys2llPJxjLZO6Y/Ndi9pUZZ/7wTNX4bNtCVX2R0enPgfcX2V/FWSfLHcy9j++8xeZum3bd00y8o989nsnAo8wI8P5O9tlP0h4ZJiOAcdi23DSGV9f1Hngs4HjIuCBz07L7KfjgWzX80Pq2/bXc6aDQoQq/NmudgrGmY7nfmD0gbO+OdnvORddN962XoNH//X7lP1Vlv2IJoJVRXVWVNmvcoYw835GA3gPKavij/y14hbJp2yolrQgp5GnKriIFeLMvuvxyQi34sq2aUdke/zL7vzN3U4Pba37pW2RcH4yAlI7JHWfNYtfX+McUpKDwNbylXQwKN9ZaUkT9wUprZ2b1Szj6ck+8tyeP89SLQHLvA+uOe3pdWqquHOtaglTFf48M1zHCp2h3Iv6jBG5Hpz/tHOtoywIP89C7g/7Tva+jk6wTzoaeV6WU+6m7C8vIotIy3JLaiKwgEQjihE5fiLREbfIdyv72Qdie9utd95fknefzLXHpFPAPi+/9DuTDgL7iKRW2Y/kcawqmK/4h5OWtIN9sc9aQsOfaycibWVb3qulTnR8erKPxNIG4Pxqx2qW7CP1IZNh3/bGDy/qkND+2q6MOgzJPtcp7c49SqcC6HjNI/v1vYygRLxpT+28ZaJ3/QzHrvebNkX4q5TXScAIfHu9e7JPJ61eE+5rfQ6r7NMB4TrWbXNf+HsdnallV7XdvVEVZX+VJuiyak8+E9FFglPWQjnLptt/8Z/UGV+6avwaGfBsV0t3GC344NmXjbP+ee3L37h+sm0Enk5HXq8jCz3Zf9mJX5y8RllNMvhb796+qE11FKB2NmhPOzehXptPnHfNpLyI9+hU5PXsA8Fn3gOjC3QIlP3Vlf3IX5WgSCPi1kbKSKrsI8NINq8lW4v0I2t1tCCSlux/fa2Vb7L0gUxrK7jsO52AmkWu2f3avmRla1kSEhd5I6OM2FVZR6Lb8qU66TTZY8QWUY8QRmQDGf+8zzFzDdvruD8TReedoEuN/WpO0O3JPte29zleb4W/inTbSelN9s2xEenc7/rM8JzxvCVbn+25zim/YUQlwt57PtJm9p9OJ/cr95FnOLzwvd8fv5YOH89Mtqv3ZGiUTNlfdZGYZHPbMhREqI1IVxVvJBEJpuwBiWUbMqS8XkthIlOIZSvZVRaRps9/+qLJ61lNpx6z1mbTwQhkmlvZR/DSCaB9kW6y2imFYX+0r44OILytQJKdTpY9ZR58PhnydE6qaCO5kUyO3Y4UzJL9KrKRzre/5b/G1y7ZcoIMdHsdhsp4aHtWXqojNr171KvZp+SrHVnJNa7tRZq55imhqaLOM5eRCs4rHc+MDrG/vFbni+QecC0j2D3Z//hHzlty3di+Zu9zTeqzxUhWts3zyXn0JlTTIUnpl2U8qyz7SD4y2y69+b2Nd4zfv+zbmxa9nk5AsuvI/GSIe/uusbjTAUC427r3jABUec4oQiBLPyT7CHor9vX4KS8ic18z9LUev+1U1GtDO2q76ggF50tn4cUnfGF8LtbsH1jZH5LJWv8ePvI/d8ysqUbsau1/T/Zr+QMCncwtJTNtm9IByLbTMusZbehJfG8JSOSQzC2i3NbKJ0NM+Ub9DGLZ1nbXUpQq/kMjJKsp+8hqW8qyVrLP/R06B+4N7eBa1hKttsNUO1G1XIbOY3uv6jNTS8tyHyL2mTDMz3QA6ryRts11hCLlSLUsKlJf21SfQyKdm3buhbK/trIfweoJZiVCXuVo2kosqZd+/Sv/YyLZPdmPeNes7OR30oLYtsesclXFOu2rsk8WfKjOvFe6RGYZQa/Z/byXLHTbOeIzte68tinnXUVypbLf1pgj+lVu66TkWTX7s+7RrNV4EP3artretgSmjlK0dfqReEjHIceO2NM5SEa9jhD1ZD8jFe2oFR2P9pqkA8Bx2mVHQ0rKcr94Fpygu8plPAgwGe+A1LYTamu5zRDJrH/lmzd236/1/YwOhH855YIlbUwpEfX80yboprOR7HxGBb51/W1Lynqmcfw7z11ybdo20fZaZlTnI9DZmDUJ+QiU/acsxK+uRPbr5M8q28gN7xG1nKIn+21NdQQQye4JXk/2yYjPEtNpdeqzymhmlcCQHaaUJ8dsieynxGieUo0eyGBbwhI5ravttBNWa2177xx4H0FNx4LOSG+lm7Uu42k7M735B7Vchw7gvMt7ZtWcKvu9Y6RDxr2q96wd5WjPtXYC6+jLckZV0kE9wmR/ye+jtZb9lLWQ4W3LdBC+tgSnJ/s9ASWzTAeirSkfkv36WiupyV4PrcYzS/bb1XiQ2pAsO7LOaEJbR94KZG9kYdZqPBUy4vsr+1XiM7KCeCKqbVnK/sg+94iRiFn3aGg1nlPe/amxDNf6/la8aw1+nSPSE+VatsOE3lbM6ThQetXbd0/2c13be9WboNubr9GSZy777T2zyv4qTdCtr7MEZ/1MMugIOx2DXtTtj/7nT44FOGU+k1741m2T+QGBybhtGyPVyPs02a+dBsp6Umufibm1Q5Aynl5kJCPXgHb3rh1ZfMqbuD5tB4hSJWV/EQ9ZiNsW4hnLlf06uXJoOcsqNz3Zbz9HdjXSiWhROsE+KM8Ykn3KNNZK9mt5UCunySynQ0N5Ce0ks1/rsiN/mXsQkawZ7Gmyz+hHr9Sond/QW9GFict0CLgOyPK0a1HbzLm0ow0RXzodvZWIVjpBN18gRmabY1Du0numMpmW82qPwWenlZDNkv1adlNXJWpLa9pzpURnaNt6f2vZGFLfa+s8S8OuQ9lf8vtorWWfDHWvLnqoPn8e2a+TNsmOI3Hsuyf2ea3WxUdm2yU/lyv7yH3dd613Z7ta2oPIIYDsk8xxK5CpQadj0GbHh2Sfz9SypDa7P0v2U1pTJ+jmexHIcpMtp/yoinEtR+rJPiMjOReuPaVQQ/doWs3+rJGIdpWaL5598WQ0oP0cIzhtJ6xm6LmGOe9WtKfJfp33kY7dkOzTrl75GtFOqFb211D2yUxXOa8Z95SwUM5T9/XcN5w1XokmJS/IN6Uttd6f93rHTAeCibZ1n+yvnTw7benNtC37a+cLkLVvS3vSVr44jHKerPwzJPt0UOjAcE2yDz5D+U8m6dIOZX8JX1qI0UKcT1Ztf2UfGczEQrLBbVlEK3PzyH7KJqBmpKvw9sp4UnedUppW1pcr+whnlTWyz7UMBIHureJSRbEVzbYkhHIOOjiIewS7lUlGOjKHoH62TgptS6LYLp0ejhnZnnYt6jUly13fq6sI1cnM7fnWDsk02edcsyJNnchcJzy37WOkIhNpM6JTV8upIxKUzGQlqNzDWbJfO4ppW1um1rs/tRypjlBwTtxbniPuc+0U1fkFtI9z5bru7zKc66iM54z7fh99cyF+a61lH/GczOO5+sYlpRXIZS2vmEf2ezXVRMpierKPyNaSmtqu3jH3R/bbJSvJrueYtK9mi+tyiz3Zj3gjfPXcOGcmafZq9ulssG2klWx8/ew02a9tS4aa61QnRM9a7rMn+xktaCeW9u7Rasp+Ffo6r6Aeu21TMv50bDIK0X6rc0/2M4rA/urSrLU0J9ck5UUco25Lp4gRhXoeyv4BWnqzSjXZ9awwU4WZDDafQ/STSc/KOZn0mtIYJBnZZ/WaVsRrxp1Jrkg+GfnIM/Keevhpsk/nolJX8Uk2PiMFdCzI4tdlRMnQ5zhDsk+bs48bf7hlMgcB2c/rmTew0jjhbSduX7jdG9dJbF2IPQuxk6za5VduuGt/VwKpk2ERf6QUwUPY2gmWKdmZV/ZTekG9da1d74kpYoZwklWtq/dE/pYr+8CSiHye9tRRh3aZStqDtFE3Xlfd6a1vTxs5LzLCkcqaye51kNKxOuPCOxfJZC2VosOAbHL969KOtSMw7VogmnWFoNqBqdlrrgMdKdpHe+qyo7XTN/SlWnQk6kpIjEBUSc/++MkzxbODHNdnKuvs18mxXEM6YNyDTGzmOOkgzSP79ZnujaYMlSzlPtBmPsOzWFc2SsY/nSauIZ0R7m0duWpr/mfFcccdd/c6+X10x0Lsvi+2LMTD1vpLtWrWmcwmIogE8bPWm9fVT+aRfTLHZJsRt1o6Uyc71vIJZC/LfNYVT9IBWa7sp747k45beUYc2/p+tq2r7EQA62RgRkVoLwKbLDmZ6yHxriMedZ7D0JdqtcuF5py5HnW1ItrGRGiu67QyHq4158p+IvtZaYZ7VCW41rmvpuzTUUnNPc8WzwXXsE6azRyN+t0LtdSolfch2a/PCx08rj+dp3pfI/t14jBtYWSB1zJHoy7/qew/4MCts19r3JHwZLH5cw/q65PZR5ozmbdHLa+hI9CusV87GnWN/2myXyfq1pV5apDBb9fHz4Tk1OvPKuNh8m9vHylPcunNJTx2IZCEryzE85eT2a9y1K4xv2jeRLOO/DTZR8p6tfpV8pL9ruJW5bqVwZXIfp2XUEW3ZrZ73wlQ21uPV7PW0/bZa1MdVUhJTq5ZncDcwlKSdU7FrHX26YTUcp6aac4IwxD1m3DnqafnuenN20B4pz1T3Jd6TpQADW1fOxLzyH5dgacdhZkm+3Ry2jX2exO9ef5rR2zaCkhHUGY/v48uzO+jtc7spwSlZu+7/3/cJ2Y9kWplv5aIVFJfjmy1so9U1aUMQ127fiWZ/d75ZCQBmWw7NZk03Gb8uVYpJWnhHLL60FCWPZ+tq9fU1V2G9tuu9lLLr+o55RpWYa5LaiYrPnSPcs60L9n11ZT9fJFbb55ASnV6S1jW57P3Tc492W9X3qmdzdzvOtpRJ25XuKaZQ6Dsr7LsU2KD1BIsLdn7lllWyMk2kViEn7p4JuAyARZRJ8vfrkaDfFPuku0ob2E/vW/jTWaezD+ZdrZln+1KOGTi0572G20z8sB7jCwMnTcZfc6LFYXyHQBtxyDXhlGHoW/UpTNEO5m/kGvQu45HuOz/0kI8e6UTdHvLbSKWiDfyibiQDW/LEijPSYa3NxGUrCxyxD7YH0KK2OUzvfpr9kn2GvHmM1nmsO5z6Jh5PTXj9TW2pUSIbCz7pl3tFyRxfkg871NPjrzSXuScfVTZjExzbTg/pJU68/oFYENt4jhk0Xv7pCPFOdNORh3IMjMiUT8/z7WoHbheGyLW7JvzzTrxQ/ti2+ynBufMOUz7ZmSuCdeVa8RxuF4cl/PszXNAtnkG2J5tuVdtm3ge04ZZHVi26XVE6v3J6FPtKJClz/dDcD/aZzH/BrKsKm1lBIDnfH++r2IdyX7399GBkP36ZVEIDxKD9JFpR/SQwzaTiiwmA90uJRnZJZvKPpIBZ//5TCZX1hrxTJLlM0harxORz9dyI46f1yPFvF+3pROAaLNvltRsy5WQ0hyb7ci8Z0lOoq4qg0Syv5wf5SJMVh1qU70+dBrafXLNa0a/ToBFjNtrnzkNfDFVvhOAfXB8JJ/PVtnPUqhk62lzvvyJ68vrfJ7XaU9td+4RHa68Ns9zxMhM7z61dfOcH/c997vOM2ijXrd20m97zLYjy2gM94jjcM24drnm7TG5BozOsC3Xlmel7bDks+0IhLJvrLtw6c1DJ+bJ0hrGeg+X3jw8Y9pqPIZhKPuGsq/sK/uGoewr+4ah7Cv7hrKv7BuGsq/sK/uGoewr+4ayf5jJPrXn1O9P+xIjw1D2lf1DMagnp3Z8aI1/w1D2lX1D2T/iZd8wDGXfMAxlX9k3lH1l3zCUfWXfMAxlX9k3lH3lyTCUfWXfMAxlX9lX9pV9wzCUfWXfMAxl31D2lX3DMJR9Zd8wDGXfUPaVfcMwlH1l3zCUfWXfUPaVfcMwlH3DMJR9Zd9Q9pV9w1D2lX3DMJR9Zd9Q9pUnw1D2lX3DMJR9ZV/ZV/YNw1D2lX3DMJR9Q9lX9g3DUPaVfcMwlH1D2Vf2DcNQ9pV9w1D2lX1D2Vf2DcNQ9g3DUPaVfUPZV/YNQ9lX9g3DUPaVfUPZV54MQ9lX9g3DUPaVfWVf2TcMQ9lX9g3DUPYNZV/ZNwxD2Vf2DcM4zGV/x849d97z853Guo9dG9brf6x79t57G8JvGMbhEwv/IV66Xn8n7dix885t92w3DOMIjPX8u01ERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERE5HDl/wFFekLH34ChkgAAAABJRU5ErkJggg=="},203:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var i=r(2),a=r(6),n=(r(0),r(1082)),c={id:"crudruntime",title:"CRUD Runtime Abstraction",sidebar_label:"CRUD Abstraction"},o={unversionedId:"crud/crudruntime",id:"version-0.12.x/crud/crudruntime",isDocsHomePage:!1,title:"CRUD Runtime Abstraction",description:"A Graphback CRUD abstraction is available as part of the @graphback/runtime package, providing a way to programatically define different datasources and configure them without code generation.",source:"@site/versioned_docs/version-0.12.x/crud/crudruntime.md",slug:"/crud/crudruntime",permalink:"/docs/0.12.x/crud/crudruntime",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/crud/crudruntime.md",version:"0.12.x",sidebar_label:"CRUD Abstraction",sidebar:"version-0.12.x/docs",previous:{title:"Graphback CRUD Specification",permalink:"/docs/0.12.x/crud/crudspec"},next:{title:"Graphback Plugins introduction",permalink:"/docs/0.12.x/plugins/plugin-intro"}},l=[{value:"GraphbackCRUDService",id:"graphbackcrudservice",children:[]},{value:"GraphbackDataProvider",id:"graphbackdataprovider",children:[]},{value:"Adding custom resolvers to runtime",id:"adding-custom-resolvers-to-runtime",children:[]},{value:"How Runtime relates to the resolvers",id:"how-runtime-relates-to-the-resolvers",children:[]},{value:"Why we need CRUD Abstraction",id:"why-we-need-crud-abstraction",children:[]}],s={rightToc:l};function b(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A Graphback CRUD abstraction is available as part of the ",Object(n.b)("inlineCode",{parentName:"p"},"@graphback/runtime")," package, providing a way to programatically define different datasources and configure them without code generation."),Object(n.b)("p",null,"Runtime is abstracted into two interfaces:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"GraphbackCRUDService"),": layer that wraps data provider, can implement custom behaviour like subscriptions or live queries"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"GraphbackDataProvider"),": data access layer ")),Object(n.b)("h3",{id:"graphbackcrudservice"},"GraphbackCRUDService"),Object(n.b)("p",null,"Graphback provides the following implementations of ",Object(n.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"CRUDService"),": implements subscriptions and logging. Used by default in resolver generator")),Object(n.b)("h3",{id:"graphbackdataprovider"},"GraphbackDataProvider"),Object(n.b)("p",null,"Graphback provides the following implementations of ",Object(n.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),Object(n.b)("inlineCode",{parentName:"a"},"PgKnexDBDataProvider")),": PostgreSQL data provider using ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"http://knexjs.org/"}),"Knex.js")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@graphback/runtime-mongo"}),Object(n.b)("inlineCode",{parentName:"a"},"MongoDBDataProvider")),": Data provider for MongoDB"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),Object(n.b)("inlineCode",{parentName:"a"},"KnexDBDataProvider")),": Data provider using ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"http://knexjs.org/"}),"Knex.js"))),Object(n.b)("p",null,"Your resolvers can use any of these data providers by swapping the implementation and attaching it to your application context. See ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"../db/datasources"}),"Data Sources")," to learn how."),Object(n.b)("p",null,Object(n.b)("img",{src:r(1093).default})),Object(n.b)("h2",{id:"adding-custom-resolvers-to-runtime"},"Adding custom resolvers to runtime"),Object(n.b)("p",null,"Runtime layer will come with autogenerated schema that will also include custom resolvers provided in model.\nDevelopers can append their custom resolvers to resolver array to extend runtime layer."),Object(n.b)("h2",{id:"how-runtime-relates-to-the-resolvers"},"How Runtime relates to the resolvers"),Object(n.b)("p",null,"Graphback resolver generator plugin generates resolvers that utilize one of the preconfigured ",Object(n.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," implementations.\n",Object(n.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," implementation is using ",Object(n.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider"),"."),Object(n.b)("p",null,Object(n.b)("img",{src:r(1093).default})),Object(n.b)("p",null,"Instances need to be added to ",Object(n.b)("inlineCode",{parentName:"p"},"context")," object in resolver for example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"findAllComments: (parent, args, context) => {\n  // Comment is an implementation of `GraphbackCRUDService` \n  return context.Comment.findAll();\n};\n")),Object(n.b)("h2",{id:"why-we-need-crud-abstraction"},"Why we need CRUD Abstraction"),Object(n.b)("p",null,"Code generators produce a large amount of the code that needs to be maintained later.\nHaving generator code diverging from original form will prevent developers from utilizing generators.\nGraphback tries to address many challenging issues like data caching, batching, consistency etc. that will be hard to implement and test by utilizing only code generation.\nThat is why our default resolver generators rely on CRUD abstraction layer that can be used to connect Graphback to any datasource without writing generator plugin."))}b.isMDXComponent=!0}}]);