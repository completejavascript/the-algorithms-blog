webpackJsonp([63617280820024],{786:function(n,e){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>"Cube free number" là một số mà không có số chia nào của nó là số dạng lập phương (số dạng lập phương ví dụ như <code>8 (2*2*2))</code>, <code>27(3*3*3)</code>. Do đó những số cube free number là 1, 2, 3, 4, 5, 6, 7, 9, 10,  11, 12, 13, 14, 15, 17, 18,...(ta xem xét 1 như là số cube free number). 8, 16, 24, 27, 32 không phải 8, 16, 24, 27, 32. Trong đó, vị trí của 1 trong dãy là 1, vị trí của 2 là 2, vị trí của 3 là 3, vị trí của 10 là 9. Cho trước một số dương, bạn hãy cho biết xem nó có phải là cube free number hay không, và nếu có thì chỉ ra vị trí của nó trong dãy.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên là là số T, số lượng test case, 1 &#x3C;= T &#x3C;= 100000. Sau đó là T dòng. Mỗi dòng là một số nguyên dương n, 1 &#x3C;= n &#x3C;= 1000000.</p>\n<h3>Đầu ra:</h3>\n<p>Với mỗi test case, in ra một dòng dạng "Case I:", trong đó i là chỉ số của test case. Sau đó nếu nó không phải là cube free number thì in ra "Not Cube Free". Ngược lại thì in ra vị trí của nó trong dãy.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>10\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>Case 1: 1\nCase 2: 2\nCase 3: 3\nCase 4: 4\nCase 5: 5\nCase 6: 6\nCase 7: 7\nCase 8: Not Cube Free\nCase 9: 8\nCase 10: 9\n</code></pre>\n<p>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/CUBEFR/">http://www.spoj.com/problems/CUBEFR/</a></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Tôi sẽ sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a> để giải bài toán. Cụ thể hơn là sử dụng thuật toán sàng. Bởi lẽ dãy số chỉ có một, nên tôi sẽ sinh ra dãy số một lần duy nhất.</p>\n</li>\n<li>\n<p>Trước tiên, dùng một mảng đánh dấu, khởi tạo giá trị bằng 0. Duyệt các số i từ 2 đến 100, khi đó số dạng lập phương từ số đó là <code>k = i*i*i</code>. Suy ra số <code>1*k, 2*k, 3*k, ...</code> sẽ không phải là cube free number và được đánh dấu -1. Ở đây, tôi chỉ xét đến 100 vì <code>100*100*100 = 1000000</code>, là đủ đến giá trị lớn nhất của n. </p>\n</li>\n<li>\n<p>Sau khi đánh dấu những số không phải cube free number, tôi sẽ duyệt một lượt nữa để đếm vị trí của những số cube free number và lưu luôn vào mảng đánh dấu trên.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91920565" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-cubefr-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-cubefr-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-cubefr-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>stdio.h<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-cubefr-cpp-LC2" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-cubefr-cpp-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">1000001</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-cubefr-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> free_cube[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-cubefr-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-cubefr-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">create_free_cube</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-cubefr-cpp-LC7" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-cubefr-cpp-LC8" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">2</span>; i &lt;= <span class="pl-c1">100</span>; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-cubefr-cpp-LC9" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-cubefr-cpp-LC10" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> t = i*i*i;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-cubefr-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> j = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-cubefr-cpp-LC12" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-cubefr-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">while</span>(<span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-cubefr-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-cubefr-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> temp = t*j;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-cubefr-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(temp &lt; MAX)</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-cubefr-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-cubefr-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t\t\t\tfree_cube[temp] = -<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-cubefr-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t\t\t\tj++;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-cubefr-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-cubefr-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">else</span> <span class="pl-k">break</span>; </td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-cubefr-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-cubefr-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-cubefr-cpp-LC24" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-cubefr-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> cnt = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-cubefr-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt; MAX; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-cubefr-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(free_cube[i] &gt; -<span class="pl-c1">1</span>) </td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-cubefr-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-cubefr-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\t\tcnt++;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-cubefr-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t\t\tfree_cube[i] = cnt;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-cubefr-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-cubefr-cpp-LC32" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-cubefr-cpp-LC33" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-cubefr-cpp-LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-cubefr-cpp-LC35" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-cubefr-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-cubefr-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">scanf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d<span class="pl-pds">&quot;</span></span>,&amp;T);</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-cubefr-cpp-LC38" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-cubefr-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; MAX; i++) </td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-cubefr-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t    free_cube[i] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-cubefr-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t    </td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-cubefr-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">create_free_cube</span>();</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-cubefr-cpp-LC43" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-cubefr-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-cubefr-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-cubefr-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> n = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-cubefr-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">scanf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d<span class="pl-pds">&quot;</span></span>,&amp;n);</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-cubefr-cpp-LC48" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-cubefr-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(free_cube[n] == -<span class="pl-c1">1</span>) <span class="pl-c1">printf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Case %d: Not Cube Free<span class="pl-cce">\\n</span><span class="pl-pds">&quot;</span></span>,tc+<span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-cubefr-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">else</span> <span class="pl-c1">printf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Case %d: %d<span class="pl-cce">\\n</span><span class="pl-pds">&quot;</span></span>,tc+<span class="pl-c1">1</span>,free_cube[n]);</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-cubefr-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-cubefr-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-cubefr-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-cubefr-cpp-LC53" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/6d73c1229673c3ea44fc1b93e40cf7f6/raw/f0b4844833d3f414698785271128324c4b40128c/CUBEFR.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/6d73c1229673c3ea44fc1b93e40cf7f6#file-cubefr-cpp">CUBEFR.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-12-01---spoj-com-thuat-toan-bai-cubefr-cube-free-numbers/spoj-com-thuat-toan-bai-cubefr-cube-free-numbers.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài CUBEFR - Cube Free Numbers",date:"01/12/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy","thuật toán sàng"]},fields:{slug:"/spoj-com-thuat-toan-bai-cubefr-cube-free-numbers/"},excerpt:'Đề bài: "Cube free number" là một số mà không có số chia nào của nó là số dạng lập phương (số dạng lập phương ví dụ như  8 (2*2*2)) ,  27(…',timeToRead:4},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài CODFURY - Megatron and his rage"},fields:{slug:"/spoj-com-thuat-toan-bai-codfury-megatron-and-his-rage/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài CANTON - Count on Cantor"},fields:{slug:"/spoj-com-thuat-toan-bai-canton-count-on-cantor/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-cubefr-cube-free-numbers/",prevSlug:"/spoj-com-thuat-toan-bai-codfury-megatron-and-his-rage/",nextSlug:"/spoj-com-thuat-toan-bai-canton-count-on-cantor/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-cubefr-cube-free-numbers-a5369b54666d3e8b4cbd.js.map