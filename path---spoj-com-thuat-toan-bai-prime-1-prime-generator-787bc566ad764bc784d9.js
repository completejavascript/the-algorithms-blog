webpackJsonp([0xf377fa79d33f],{824:function(n,e){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Peter muốn tạo ra những số nguyên tố cho một hệ thống bí mật của anh ta. Hãy giúp Peter. Nhiệm vụ của bạn là tạo ra tất cả những số nguyên tố giữa hai số cho trước.</p>\n<h3>Đầu vào:</h3>\n<p>Bắt đầu với số T là số lượng test case, t &#x3C;= 10. Với mỗi test case, sẽ có một dòng bao gồm 2 số m và n, 1 &#x3C;= m &#x3C;= n &#x3C;= 1000000000, n - m &#x3C;= 100000, phân biệt nhau bởi dấu cách.</p>\n<h3>Đầu ra:</h3>\n<p>Với mỗi test case, in ra tất cả những số nguyên tố p thỏa mãn m &#x3C;= p &#x3C;= n, mỗi số in ra trên một dòng. Mỗi test case phân biệt nhau bởi dòng trống.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>2\n1 10\n3 5\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>2\n3\n5\n7\n\n3\n5\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/PRIME1/">http://www.spoj.com/problems/PRIME1/</a></em></p>\n<h3>Phân tích:</h3>\n<p>Đây là một bài toán đơn giản, có thể xếp vào loạt bài sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a>. Đơn giản chỉ là việc duyệt các số từ số M đến số N, kiểm tra xem số nào là số nguyên tố thì in ra.</p>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919321" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-prime1-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-prime1-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-prime1-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-prime1-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-prime1-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-prime1-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> <span class="pl-en">isPrime</span>(<span class="pl-k">int</span> a)</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-prime1-cpp-LC5" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-prime1-cpp-LC6" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(a == <span class="pl-c1">0</span> || a == <span class="pl-c1">1</span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-prime1-cpp-LC7" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(a == <span class="pl-c1">2</span>) <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-prime1-cpp-LC8" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-prime1-cpp-LC9" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">2</span>; i*i &lt;= a; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-prime1-cpp-LC10" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(a % i == <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-prime1-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-prime1-cpp-LC12" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-prime1-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-prime1-cpp-LC14" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-prime1-cpp-LC15" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-prime1-cpp-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-prime1-cpp-LC17" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-prime1-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-prime1-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-prime1-cpp-LC20" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-prime1-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T, M, N;</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-prime1-cpp-LC22" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-prime1-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-prime1-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-prime1-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; M &gt;&gt; N;</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-prime1-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = M; i &lt;= N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-prime1-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(<span class="pl-c1">isPrime</span>(i)) cout &lt;&lt; i &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-prime1-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-prime1-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-prime1-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-prime1-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-prime1-cpp-LC31" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/330374b8faae79219d23d31028daf919/raw/2e389caf769d88284d6d4a22227fec622320fb94/PRIME1.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/330374b8faae79219d23d31028daf919#file-prime1-cpp">PRIME1.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-11-05---spoj-com-thuat-toan-bai-prime1-prime-generator/spoj-com-thuat-toan-bai-prime1-prime-generator.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài PRIME1 - Prime Generator",date:"05/11/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-prime1-prime-generator/"},excerpt:"Đề bài: Peter muốn tạo ra những số nguyên tố cho một hệ thống bí mật của anh ta. Hãy giúp Peter. Nhiệm vụ của bạn là tạo ra tất cả những số…",timeToRead:3},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài PQUEUE - Printer Queue"},fields:{slug:"/spoj-com-thuat-toan-bai-pqueue-printer-queue/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài QKP - Queens, Knights and Pawns"},fields:{slug:"/spoj-com-thuat-toan-bai-qkp-queens-knights-and-pawns/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-prime1-prime-generator/",prevSlug:"/spoj-com-thuat-toan-bai-pqueue-printer-queue/",nextSlug:"/spoj-com-thuat-toan-bai-qkp-queens-knights-and-pawns/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-prime-1-prime-generator-787bc566ad764bc784d9.js.map