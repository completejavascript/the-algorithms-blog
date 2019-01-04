webpackJsonp([85794802358437],{855:function(n,s){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Yêu cầu của bài toán vô cùng đơn giản. Hãy in ra tất cả số nguyên tố nhỏ hơn 10^8.</p>\n<h3>Đầu vào:</h3>\n<p>Không có đầu vào</p>\n<h3>Đầu ra:</h3>\n<p>Để giúp cho bài toán có ít kết quả hơn, hãy in ra tất cả số nguyên tố thứ 1, 101, 201,...(những số chia cho 100 thì dư 1).</p>\n<h4>Ví dụ:</h4>\n<p><strong>Đầu vào:</strong> </p>\n<p><strong>Đầu ra:</strong> </p>\n<pre><code>2 \n547 \n1229 \n... \n99995257 \n99996931 \n99998953\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/TDPRIMES/">http://www.spoj.com/problems/TDPRIMES/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Bài này tôi xếp vào loại sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a> </p>\n</li>\n<li>\n<p>Ở đây, nếu suy nghĩ theo cách thông thường, chắc hẳn bạn sẽ viết một hàm kiểm tra xem 1 số có phải số nguyên tố hay không. Sau đó, duyệt từ 1 cho đến 10^8 để kiểm tra từng số xem nó có phải số nguyên tố hay không. Rồi in ra những số nguyên tố thứ 1, 101, 201,... Tuy nhiên, nếu làm theo cách này chắc chắn bạn sẽ bị time limit.</p>\n</li>\n<li>\n<p>Đối với bài toán này, tôi sử dụng phương pháp <a href="https://vi.wikipedia.org/wiki/S%C3%A0ng_Eratosthenes">sàng Eratosthenes</a> để tìm ra các số nguyên tố. </p>\n</li>\n<li>\n<p>Để tìm các số nguyên tố nhỏ hơn hoặc bằng số tự nhiên N bằng sàng Eratosthenes, ta làm như sau:</p>\n<ul>\n<li>Bước 1: Tạo 1 danh sách các số tự nhiên liên tiếp từ 2 đến n: (2, 3, 4,..., n). </li>\n<li>Bước 2: Giả sử tất cả các số trong danh sách đều là số nguyên tố. Trong đó, p = 2 là số nguyên tố đầu tiên. </li>\n<li>Bước 3: Tất cả các bội số của p: 2p, 3p, 4p,... sẽ bị đánh dấu vì không phải là số nguyên tố. -</li>\n<li>Bước 4: Tìm các số còn lại trong danh sách mà chưa bị đánh dấu và phải lớn hơn p. Nếu không còn số nào, dừng tìm kiếm. Ngược lại, gán cho p giá trị bằng số nguyên tố tiếp theo và quay lại bước 3.</li>\n</ul>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91918344" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-tdprimes-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-tdprimes-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-tdprimes-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>stdio.h<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-tdprimes-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-tdprimes-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-tdprimes-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">100000000</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-tdprimes-cpp-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> prime[MAX];<span class="pl-c"><span class="pl-c">//</span> Đánh dấu xem số i có phải là số nguyên tố không</span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-tdprimes-cpp-LC6" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-tdprimes-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-tdprimes-cpp-LC8" class="blob-code blob-code-inner js-file-line">{\t</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-tdprimes-cpp-LC9" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">2</span>; i &lt; MAX; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-tdprimes-cpp-LC10" class="blob-code blob-code-inner js-file-line">\t\tprime[i] = <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-tdprimes-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-tdprimes-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Số nguyên tố đầu tiên là số 2</span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-tdprimes-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">printf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>2<span class="pl-cce">\\n</span><span class="pl-pds">&quot;</span></span>);</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-tdprimes-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-tdprimes-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> cnt_prime = <span class="pl-c1">1</span>;\t<span class="pl-c"><span class="pl-c">//</span> Đếm số nguyên tố</span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-tdprimes-cpp-LC16" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-tdprimes-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Dùng phương pháp sàng để đánh dấu các số nguyên tố.</span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-tdprimes-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Số chẵn lớn hơn 2 chắc chắn không phải là số nguyên tố.</span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-tdprimes-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Nên ta chỉ cần kiểm tra số lẻ.</span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-tdprimes-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Nguyên tắc: nếu số i là số nguyên tố =&gt; 3*i, 5*i, 7*i,... </span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-tdprimes-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> không phải số nguyên tố</span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-tdprimes-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> i;</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-tdprimes-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(i = <span class="pl-c1">3</span>; i*i &lt; MAX; i=i+<span class="pl-c1">2</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-tdprimes-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(prime[i])</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-tdprimes-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-tdprimes-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\t\tcnt_prime++;</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-tdprimes-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(cnt_prime % <span class="pl-c1">100</span> == <span class="pl-c1">1</span>) <span class="pl-c1">printf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d<span class="pl-cce">\\n</span><span class="pl-pds">&quot;</span></span>,i);</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-tdprimes-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-tdprimes-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> j = <span class="pl-c1">3</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-tdprimes-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">while</span>(i*j &lt; MAX)</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-tdprimes-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-tdprimes-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\t\t\tprime[i*j] = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-tdprimes-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t\t\t\tj += <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-tdprimes-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-tdprimes-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-tdprimes-cpp-LC36" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-tdprimes-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> In ra số nguyên tố còn lại</span></td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-tdprimes-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = i; j &lt; MAX; j+=<span class="pl-c1">2</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-tdprimes-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(prime[j])</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-tdprimes-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-tdprimes-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t\tcnt_prime++;</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-tdprimes-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(cnt_prime % <span class="pl-c1">100</span> == <span class="pl-c1">1</span>) <span class="pl-c1">printf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d<span class="pl-cce">\\n</span><span class="pl-pds">&quot;</span></span>,j);</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-tdprimes-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-tdprimes-cpp-LC44" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-tdprimes-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-tdprimes-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-tdprimes-cpp-LC46" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/3a4a6230b196e756a84b4af94172e26c/raw/1108c6cf7695aad717dcc2ea3fffa4a5e1330427/TDPRIMES.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/3a4a6230b196e756a84b4af94172e26c#file-tdprimes-cpp">TDPRIMES.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"f:/Github/the-algorithms-blog/src/posts/2016-10-24---spoj-com-thuat-toan-bai-tdprimes-printing-some-primes/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài TDPRIMES - Printing some primes",date:"23/10/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","số nguyên tố","tham lam greedy","thuật toán sàng"]},fields:{slug:"/spoj-com-thuat-toan-bai-tdprimes-printing-some-primes/"},excerpt:"Đề bài: Yêu cầu của bài toán vô cùng đơn giản. Hãy in ra tất cả số nguyên tố nhỏ hơn 10^8. Đầu vào: Không có đầu vào Đầu ra: Để giúp cho bài…",timeToRead:4},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài WILLITST - Will it ever stop"},fields:{slug:"/spoj-com-thuat-toan-bai-willitst-will-it-ever-stop/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài TRAFFICN - Traffic Network"},fields:{slug:"/spoj-com-thuat-toan-bai-trafficn-traffic-network/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-tdprimes-printing-some-primes/",prevSlug:"/spoj-com-thuat-toan-bai-willitst-will-it-ever-stop/",nextSlug:"/spoj-com-thuat-toan-bai-trafficn-traffic-network/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-tdprimes-printing-some-primes-29752d935fe0af3cbf14.js.map