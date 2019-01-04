webpackJsonp([1882771847739],{846:function(n,a){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Bạn đang cố gắng để xây dựng một ngôi nhà. Nhưng không may, hiện tại bạn chỉ có sẵn 4 tường với chiều dài lần lượt là a, b, c, d. Bạn muốn ngôi nhà của bạn là lớn nhất có thể. Vì vậy, bạn muốn biết diện tích lớn nhất có thể của những hình tứ giác mà bạn có thể xây từ 4 bức tường với chiều dài đó.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên chứa số nguyên T, 1 ≤ T ≤ 2,000, là số lượng test case. Mỗi test case chứa một dòng gồm 4 số thực: a, b, c, d, với 0 &#x3C; a, b, c, d &#x3C; 1,000. Chú ý rằng luôn luôn có thể tồn tại hình tứ giác với những độ dài trên, tức là tổng của 3 cạnh luôn lớn hơn cạnh còn lại.</p>\n<h3>Đầu ra:</h3>\n<p>Mỗi test case, in ra một dòng là một số biểu diễn diện tích lớn nhất có thể. Kết quả được làm tròn 2 chữ số thập phân.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>2\n1 2 1 2\n0.5 0.5 0.5 0.5\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>2.00\n0.25\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/QUADAREA/">http://www.spoj.com/problems/QUADAREA/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Theo như quan điểm của tôi thì đây thực chất là một bài toán mẹo. Do đó tôi sẽ xếp nó vào loạt bài sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy.</a></p>\n</li>\n<li>\n<p>Thực tế, với một hình tứ giác có 4 cạnh xác định trước. Thì dù bạn có xoay nó như thế nào đi chăng nữa thì diện tích của nó cũng sẽ không thay đổi - là một giá trị duy nhất. Do đó, bạn chỉ cần tính diện tích bình thường. Tôi áp dụng <a href="https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron">công thức Heron</a> để tính diện tích tứ giác lồi.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919279" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-quadarea-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-quadarea-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-quadarea-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-quadarea-cpp-LC2" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>stdio.h<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-quadarea-cpp-LC3" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>math.h<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-quadarea-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-quadarea-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-quadarea-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-quadarea-cpp-LC7" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-quadarea-cpp-LC8" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-quadarea-cpp-LC9" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;, &quot;r&quot;, stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-quadarea-cpp-LC10" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-quadarea-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T;</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-quadarea-cpp-LC12" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-quadarea-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-quadarea-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-quadarea-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">double</span> a,b,c,d;</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-quadarea-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; a &gt;&gt; b &gt;&gt; c &gt;&gt; d;</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-quadarea-cpp-LC17" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-quadarea-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">double</span> p = (a + b + c + d) / <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-quadarea-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">double</span> S = <span class="pl-c1">sqrt</span>((p-a)*(p-b)*(p-c)*(p-d));</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-quadarea-cpp-LC20" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-quadarea-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">printf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%.2lf<span class="pl-cce">\\n</span><span class="pl-pds">&quot;</span></span>, S);</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-quadarea-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-quadarea-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-quadarea-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-quadarea-cpp-LC24" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/387106905a27e41731278df1d9bc6743/raw/f048893247017ec75395cf0c4dcdb0306850d01e/QUADAREA.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/387106905a27e41731278df1d9bc6743#file-quadarea-cpp">QUADAREA.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"f:/Github/the-algorithms-blog/src/posts/2016-11-05---spoj-com-thuat-toan-bai-quadarea-maximal-quadrilateral-area/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài QUADAREA - Maximal Quadrilateral Area",date:"05/11/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-quadarea-maximal-quadrilateral-area/"},excerpt:"Đề bài: Bạn đang cố gắng để xây dựng một ngôi nhà. Nhưng không may, hiện tại bạn chỉ có sẵn 4 tường với chiều dài lần lượt là a, b, c, d.…",timeToRead:3},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài QKP - Queens, Knights and Pawns"},fields:{slug:"/spoj-com-thuat-toan-bai-qkp-queens-knights-and-pawns/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài QUE1 - Queue (Rookie)"},fields:{slug:"/spoj-com-thuat-toan-bai-que1-queue-rookie/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-quadarea-maximal-quadrilateral-area/",prevSlug:"/spoj-com-thuat-toan-bai-qkp-queens-knights-and-pawns/",nextSlug:"/spoj-com-thuat-toan-bai-que1-queue-rookie/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-quadarea-maximal-quadrilateral-area-8cf515470c00f5813898.js.map