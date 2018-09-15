webpackJsonp([34499498255418],{807:function(n,l){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Nestor đã làm công việc của lớp toán khoảng 3 ngày rồi. Tuy nhiên, anh ấy rất mệt vì phải làm rất nhiều công việc. Do đó, anh ấy nên chuyển giao công việc vào ngày mai. Giáo viên toán đưa cho anh ta 2 số a và b. </p>\n<p>Bài toàn đặt ra là tìm ra chữ số cuối cùng của phép toán a^b (a mũ b). Hãy giúp anh ấy bài toán này. Bạn được đưa cho 2 số nguyên là a (0 &#x3C;= a &#x3C;= 20) và b (0 &#x3C;= b &#x3C;= 2,147,483,000), với a và b không được cùng bằng 0.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên là số nguyên t, số lượng test case, t &#x3C;= 30. Sau đó là t test case, mỗi cái sẽ trên một dòng và bao gồm 2 số nguyên a, b cách nhau bằng dấu cách.</p>\n<h3>Đầu ra:</h3>\n<p>Mỗi test case in ra trên 1 dòng là số cần tìm.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>2\n3 10\n6 2\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>9\n6\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/LASTDIG/">http://www.spoj.com/problems/LASTDIG/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Tôi sẽ sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a> để giải bài toán.</p>\n</li>\n<li>\n<p>Vì đề bài yêu cầu tìm chữ số cuối cùng nên thực chất tôi chỉ cần quan tâm đến chữ số hàng đơn vị của số a, giả sử là x. Tức là nếu cần tìm chữ số cuối cùng của 13^b thì tôi sẽ tìm chữ số cuối cùng của 3^b. Kết quả là giống nhau.</p>\n</li>\n<li>\n<p>Tiếp theo, tôi sẽ xử lý số b. Số b có giá trị lớn nhất là 2,147,483,000, nên tôi không thể tính trực tiếp được. Tuy nhiên nếu các bạn chịu khó viết ra lũy thừa của các số từ 1 đến 9. Các bạn sẽ thấy rằng chữ số cuối cùng của kết quả sẽ lặp lại với chu kì bằng 4. Nghĩa là chữ số cuối cùng của a^b = chữ số cuối cùng của a^(b + 4). Do đó, thực chất tôi chỉ cần lấy số dư của b cho 4, giả sử là y.</p>\n</li>\n<li>\n<p>Vậy chữ số cuối cùng của a^b sẽ bằng chữ số cuối cùng của x^y. Cụ thể mời bạn theo dõi code bên dưới.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919631" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-lastdig-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-lastdig-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-lastdig-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-lastdig-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-lastdig-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-lastdig-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">power</span>(<span class="pl-k">int</span> a, <span class="pl-k">int</span> b)</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-lastdig-cpp-LC5" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-lastdig-cpp-LC6" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span> (b == <span class="pl-c1">0</span>) <span class="pl-k">return</span> <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-lastdig-cpp-LC7" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-lastdig-cpp-LC8" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(b % <span class="pl-c1">2</span> == <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-lastdig-cpp-LC9" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-lastdig-cpp-LC10" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> t = <span class="pl-c1">power</span>(a, b/<span class="pl-c1">2</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-lastdig-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">return</span> t*t;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-lastdig-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-lastdig-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">else</span></td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-lastdig-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-lastdig-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> t = <span class="pl-c1">power</span>(a, (b - <span class="pl-c1">1</span>) / <span class="pl-c1">2</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-lastdig-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">return</span> t*t*a;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-lastdig-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-lastdig-cpp-LC18" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-lastdig-cpp-LC19" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-lastdig-cpp-LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-lastdig-cpp-LC21" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-lastdig-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-lastdig-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-lastdig-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-lastdig-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-lastdig-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">unsigned</span> <span class="pl-k">int</span> a, b;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-lastdig-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> last_digit;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-lastdig-cpp-LC28" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-lastdig-cpp-LC29" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-lastdig-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-lastdig-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-lastdig-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; a &gt;&gt; b;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-lastdig-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(b == <span class="pl-c1">0</span>) last_digit = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-lastdig-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">else</span> </td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-lastdig-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-lastdig-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> x = a % <span class="pl-c1">10</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-lastdig-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> y = b % <span class="pl-c1">4</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-lastdig-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span> (y == <span class="pl-c1">0</span>) y = <span class="pl-c1">4</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-lastdig-cpp-LC39" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-lastdig-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t\tlast_digit = <span class="pl-c1">power</span>(x, y) % <span class="pl-c1">10</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-lastdig-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-lastdig-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; last_digit &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-lastdig-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-lastdig-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-lastdig-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-lastdig-cpp-LC45" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/eb336f050d80dd1dc6dcaeed97dcd621/raw/1ce548aced139698a19739447c8a14b897b6990d/LASTDIG.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/eb336f050d80dd1dc6dcaeed97dcd621#file-lastdig-cpp">LASTDIG.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-11-06---spoj-com-thuat-toan-bai-lastdig-the-last-digit/spoj-com-thuat-toan-bai-lastdig-the-last-digit.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài LASTDIG - The last digit",date:"06/11/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-lastdig-the-last-digit/"},excerpt:"Đề bài: Nestor đã làm công việc của lớp toán khoảng 3 ngày rồi. Tuy nhiên, anh ấy rất mệt vì phải làm rất nhiều công việc. Do đó, anh ấy nên…",timeToRead:4},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài LABYR1 - Labyrinth"},fields:{slug:"/spoj-com-thuat-toan-bai-labyr1-labyrinth/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài MICEMAZE - Mice and Maze"},fields:{slug:"/spoj-com-thuat-toan-bai-micemaze-mice-and-maze/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-lastdig-the-last-digit/",prevSlug:"/spoj-com-thuat-toan-bai-labyr1-labyrinth/",nextSlug:"/spoj-com-thuat-toan-bai-micemaze-mice-and-maze/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-lastdig-the-last-digit-e1b560b557630c92a24d.js.map