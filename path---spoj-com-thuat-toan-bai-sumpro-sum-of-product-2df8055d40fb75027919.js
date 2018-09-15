webpackJsonp([0x7b45f5aa8b35],{835:function(n,s){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Cho trước 1 số N, tìm ra tổng của tất cả các tích x*y trong đó N/x = y (phép chia nguyên). Bởi vì tổng có thể rất lớn, nên chia kết quả cho 1000000007.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên của đầu vào là một số nguyên T, là số test case. Các dòng tiếp theo, mỗi dòng bao gồm 1 số nguyên N.</p>\n<h3>Đầu ra:</h3>\n<p>Với mỗi test case in ra kết quả tương ứng.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>3\n2\n4\n6\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>4\n15\n33\n</code></pre>\n<h3>Ràng buộc:</h3>\n<p>1 &#x3C;= T &#x3C;= 500 </p>\n<p>1 &#x3C;= N &#x3C;= 10<sup>9</sup></p>\n<h3><strong>Giải thích ví dụ:</strong></h3>\n<p><strong>Ví dụ 1:</strong></p>\n<pre><code>2 / 1 = 2\n2 / 2 = 1\nAnswer = 1 * 2 + 2 * 1 = 4\n</code></pre>\n<p><strong>Ví dụ 2:</strong></p>\n<pre><code>4 / 1 = 4\n4 / 2 = 2\n4 / 3 = 1\n4 / 4 = 1\nAnswer = 1 * 4 + 2 * 2 + 3 * 1 + 4 * 1 = 15\n</code></pre>\n<p><strong>Ví dụ 3:</strong></p>\n<pre><code>6 / 1 = 6\n6 / 2 = 3\n6 / 3 = 2\n6 / 4 = 1\n6 / 5 = 1\n6 / 6 = 1\nAnswer = 1 * 6 + 2 * 3 + 3 * 2 + 4 * 1 + 5 * 1 + 6 * 1 = 33\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/SUMPRO/"> http://www.spoj.com/problems/SUMPRO/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Nếu làm thông thường, chắc chắn các bạn sẽ bị time limit. Ở đây, tôi áp dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy,</a> sẽ giúp giải quyết bài toán nhanh hơn. </p>\n</li>\n<li>\n<p>Các bạn để ý rằng: với các số chia từ 1 đến sqrt(n) (căn bậc hai của n) thì giá trị thương số chỉ là 1 giá trị duy nhất, không bị lặp lại. Tuy nhiên, từ đó trở đi, giá trị thương số sẽ bị lặp lại. </p>\n<ul>\n<li>\n<p>Trong ví dụ 3, ta có thể tính kết quả theo cách khác là: </p>\n<pre><code>Answer = 1 * 6 + 2 * 3 + 3*2 + (4 + 5 + 6) * 1 = 33\n</code></pre>\n</li>\n<li>\n<p>Trong đó có một cụm số liên tiếp tăng dần là 4 + 5 + 6</p>\n</li>\n</ul>\n</li>\n<li>\n<p>Nếu tính toán với số n lớn hơn thì trong kết quả sẽ chứa nhiều cụm số liên tiếp hơn. Mà áp dụng công thức đối với cấp số cộng ta có: <code>a[1] + a[2] + ... + a[n] = (a[n] - a[1] + 1) * (a[n] + a[1]) / 2</code> với công sai d = 1. Ví dụ: <code>1 + 2 + 3 + 4 + 5 = (5 - 1 + 1) * (5 + 1) / 2 = 15</code></p>\n</li>\n<li>\n<p>Như vậy, thời gian chạy bài toán sẽ nhanh hơn rất nhiều.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91918464" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-sumpro-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-sumpro-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-sumpro-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-sumpro-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-sumpro-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-sumpro-cpp-LC4" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">define</span> <span class="pl-en">ull</span> <span class="pl-k">unsigned</span> <span class="pl-k">long</span> <span class="pl-k">long</span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-sumpro-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-sumpro-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> LARGE = <span class="pl-c1">1000000007</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-sumpro-cpp-LC7" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-sumpro-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-sumpro-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Tổng các số từ start đến end công sai d = 1</span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-sumpro-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-sumpro-cpp-LC11" class="blob-code blob-code-inner js-file-line">ull <span class="pl-en">Sum</span>(ull start, ull end)</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-sumpro-cpp-LC12" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-sumpro-cpp-LC13" class="blob-code blob-code-inner js-file-line">\tull num = end - start + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-sumpro-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> num * (start + end) / <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-sumpro-cpp-LC15" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-sumpro-cpp-LC16" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-sumpro-cpp-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-sumpro-cpp-LC18" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-sumpro-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-sumpro-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-sumpro-cpp-LC21" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-sumpro-cpp-LC22" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-sumpro-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-sumpro-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-sumpro-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Nhập đầu vào</span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-sumpro-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\tull N;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-sumpro-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; N;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-sumpro-cpp-LC28" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-sumpro-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\tull answer = <span class="pl-c1">0</span>, k;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-sumpro-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-sumpro-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Tính toán bình thường với số chia </span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-sumpro-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> từ 1 đến căn bậc hai của N</span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-sumpro-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(k = <span class="pl-c1">1</span>; k*k &lt;= N; k++)</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-sumpro-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t\tanswer += k * (N / k);</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-sumpro-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-sumpro-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Từ đây giá trị thương số của N / x sẽ bị lặp lại</span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-sumpro-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Các bạn chịu khó viết thử một vài trường hợp ra</span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-sumpro-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> sẽ thấy quy luật.</span></td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-sumpro-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\tull x = k - <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-sumpro-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(ull i = N / x; i &gt; <span class="pl-c1">1</span>; i--)</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-sumpro-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-sumpro-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t\t\tull y = N / (i-<span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-sumpro-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\t\tanswer += <span class="pl-c1">Sum</span>(x+<span class="pl-c1">1</span>,y) * (i-<span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-sumpro-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\t\tx = y;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-sumpro-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-sumpro-cpp-LC46" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-sumpro-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; answer % LARGE &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-sumpro-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-sumpro-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-sumpro-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-sumpro-cpp-LC50" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/397ef221d725b3ae764fea31b41cb514/raw/334c2b9ca081faee6f4ce1cb44d306803693f6bd/SUMPRO.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/397ef221d725b3ae764fea31b41cb514#file-sumpro-cpp">SUMPRO.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-10-28---spoj-com-thuat-toan-bai-sumpro-sum-of-product/spoj-com-thuat-toan-bai-sumpro-sum-of-product.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài SUMPRO - SUM OF PRODUCT",date:"28/10/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-sumpro-sum-of-product/"},excerpt:"Đề bài: Cho trước 1 số N, tìm ra tổng của tất cả các tích x*y trong đó N/x = y (phép chia nguyên). Bởi vì tổng có thể rất lớn, nên chia kết…",timeToRead:5},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài STPAR - Street Parade"},fields:{slug:"/spoj-com-thuat-toan-bai-stpar-street-parade/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài TEST - Life, the Universe, and Everything"},fields:{slug:"/spoj-com-thuat-toan-bai-test-life-the-universe-and-everything/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-sumpro-sum-of-product/",prevSlug:"/spoj-com-thuat-toan-bai-stpar-street-parade/",nextSlug:"/spoj-com-thuat-toan-bai-test-life-the-universe-and-everything/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-sumpro-sum-of-product-2df8055d40fb75027919.js.map