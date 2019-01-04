webpackJsonp([0xe672245e2f0e],{860:function(l,n){l.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Khi Bob đang ở trong thư viện của trường đại học Warsaw, anh ta nhìn thấy một đầu đề ở mặt chính ngôi nhà là "Will it ever stop?" và phía dưới là đoạn code huyền bí:</p>\n<pre><code>while n > 1\n  if n mod 2 = 0 then\n    n := n/2\n  else\n    n := 3*n+3\n</code></pre>\n<p>Hãy giúp anh ấy tìm ra lời giải đáp.</p>\n<h3>Đầu vào:</h3>\n<p>Một dòng chứa một số n với n &#x3C;= 10^14</p>\n<h3>Đầu ra:</h3>\n<p>In ra "TAK" nếu chương trình có dừng lại, ngược lại thì in ra "NIE" </p>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/WILLITST/"> http://www.spoj.com/problems/WILLITST/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>Ở đây, tôi sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a></li>\n<li>Rõ ràng vòng lặp dừng lại khi n &#x3C;= 1. Mà điều này chỉ xảy ra khi số n được biểu diễn dưới dạng 2^k, Khi đó, sau k vòng lặp kết quả sẽ được n == 1. Và khi đó vòng lặp sẽ bị thoát.</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91918363" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-willitst-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-willitst-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-willitst-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-willitst-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-willitst-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-willitst-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">typedef</span> <span class="pl-k">unsigned</span> <span class="pl-k">long</span> <span class="pl-k">long</span> ull;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-willitst-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-willitst-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-willitst-cpp-LC7" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-willitst-cpp-LC8" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-willitst-cpp-LC9" class="blob-code blob-code-inner js-file-line">\tull n = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-willitst-cpp-LC10" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; n;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-willitst-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">bool</span> checkStop =  <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-willitst-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(<span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-willitst-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-willitst-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(n &lt;= <span class="pl-c1">2</span>) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-willitst-cpp-LC15" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-willitst-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Nếu số n có một ước số &gt; 2 mà lẻ thì chắc chắn </span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-willitst-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> ở trong vòng lặp đề bài n = 3*n + 3 , n sẽ tăng </span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-willitst-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> do đó vòng lặp đó sẽ không bao giờ dừng</span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-willitst-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(n &gt; <span class="pl-c1">2</span> &amp;&amp; n%<span class="pl-c1">2</span> != <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-willitst-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-willitst-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t\t\tcheckStop = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-willitst-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-willitst-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-willitst-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\tn = n/<span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-willitst-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-willitst-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(checkStop) cout &lt;&lt; <span class="pl-s"><span class="pl-pds">&quot;</span>TAK<span class="pl-pds">&quot;</span></span> &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-willitst-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">else</span> cout &lt;&lt; <span class="pl-s"><span class="pl-pds">&quot;</span>NIE<span class="pl-pds">&quot;</span></span> &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-willitst-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-willitst-cpp-LC29" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/efec8f74182d70db11609b8b9baa0a99/raw/3e1326b5be136f1974a5a0a017fa4460030de264/WILLITST.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/efec8f74182d70db11609b8b9baa0a99#file-willitst-cpp">WILLITST.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h3>Code Python:</h3>\n<p><div id="gist91918370" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-willitst-py" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-python ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-willitst-py-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-willitst-py-LC1" class="blob-code blob-code-inner js-file-line">n <span class="pl-k">=</span> <span class="pl-v">long</span>(<span class="pl-c1">input</span>())</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-willitst-py-LC2" class="blob-code blob-code-inner js-file-line">checkStop <span class="pl-k">=</span> <span class="pl-c1">1</span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-willitst-py-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-willitst-py-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">while</span>(<span class="pl-c1">1</span>):</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-willitst-py-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> n <span class="pl-k">&lt;=</span> <span class="pl-c1">2</span>:</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-willitst-py-LC6" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">break</span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-willitst-py-LC7" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (n <span class="pl-k">&gt;</span> <span class="pl-c1">2</span> <span class="pl-k">and</span> n<span class="pl-k">%</span><span class="pl-c1">2</span> <span class="pl-k">!=</span> <span class="pl-c1">0</span>):</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-willitst-py-LC8" class="blob-code blob-code-inner js-file-line">        checkStop <span class="pl-k">=</span> <span class="pl-c1">0</span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-willitst-py-LC9" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">break</span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-willitst-py-LC10" class="blob-code blob-code-inner js-file-line">    n <span class="pl-k">=</span> n<span class="pl-k">/</span><span class="pl-c1">2</span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-willitst-py-LC11" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-willitst-py-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> checkStop <span class="pl-k">==</span> <span class="pl-c1">1</span> :</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-willitst-py-LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">print</span> <span class="pl-s"><span class="pl-pds">&quot;</span>TAK<span class="pl-cce">\\n</span><span class="pl-pds">&quot;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-willitst-py-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">else</span>:</td>\n      </tr>\n      <tr>\n        <td id="file-willitst-py-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-willitst-py-LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">print</span> <span class="pl-s"><span class="pl-pds">&quot;</span>NIE<span class="pl-cce">\\n</span><span class="pl-pds">&quot;</span></span></td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/0e2871e23dc312546610fbd43e1f6417/raw/e4164d83fda8c9be9078209992d8d062a3b048ea/WILLITST.py" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/0e2871e23dc312546610fbd43e1f6417#file-willitst-py">WILLITST.py</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"f:/Github/the-algorithms-blog/src/posts/2016-10-26---spoj-com-thuat-toan-bai-willitst-will-it-ever-stop/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài WILLITST - Will it ever stop",date:"26/10/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-willitst-will-it-ever-stop/"},excerpt:'Đề bài: Khi Bob đang ở trong thư viện của trường đại học Warsaw, anh ta nhìn thấy một đầu đề ở mặt chính ngôi nhà là "Will it ever stop?" và…',timeToRead:4},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài TOANDFRO - To and Fro"},fields:{slug:"/spoj-com-thuat-toan-bai-toandfro-to-and-fro/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài TDPRIMES - Printing some primes"},fields:{slug:"/spoj-com-thuat-toan-bai-tdprimes-printing-some-primes/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-willitst-will-it-ever-stop/",prevSlug:"/spoj-com-thuat-toan-bai-toandfro-to-and-fro/",nextSlug:"/spoj-com-thuat-toan-bai-tdprimes-printing-some-primes/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-willitst-will-it-ever-stop-dacd3087b09b39895e0f.js.map