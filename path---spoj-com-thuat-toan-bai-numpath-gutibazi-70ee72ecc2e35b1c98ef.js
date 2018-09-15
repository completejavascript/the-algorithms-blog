webpackJsonp([52939552868321],{819:function(n,t){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Xunayed rất là mạnh mẽ. Anh ấy đã phát hiện ra rằng bạn của anh ta là Nurulla - người giống với anh trai mình, đã làm một việc không có khí phách với anh ta. Xunayed có thể tha thứ bất cứ điều gì, nhưng việc làm điều không có khí phách với anh ta là không thể tha thứ được. Nhưng để dạy cho Nurulla một bài học, Xunayed đầu tiên phải đến chỗ Nurulla qua một vài đường. Vì vậy, vấn đề xảy ra ở đây là những con đường thuộc về một người rất quyền lực tên là Rizvi và tất cả mọi người phải xin phép người này để có thể đi qua được những con đường. Rizvi sẽ cho phép Xunayed nếu như Xunayed giải quyết được một điều bí ẩn. </p>\n<p>Đường đi là một vài lưới 2 chiều. Xunayed hiện tại đang đứng ở vị trí ô trên cùng bên trái (1, 1) - là điểm bắt đầu. Nurulla đang đứng ở ô dưới cùng bên phải - là điểm đích. Biết Xunayed chỉ có thể đi xuống, hay sang phải. Hỏi có bao nhiêu đường mà Xunayed có thể tiếp cận Nurulla. </p>\n<p>Hãy giải quyết bài toán này để giúp Xunayed đòi lại quyền công bằng.</p>\n<h3>Đầu vào:</h3>\n<p>Bắt đầu với số nguyên T (T &#x3C;= 50) là số lượng test case. Mỗi test case sẽ gồm một dòng chứa 2 số nguyên R, C (1 &#x3C;= R, C &#x3C;= 7), trong đó, R là số lượng hàng, C là số lượng cột.</p>\n<h3>Đầu ra:</h3>\n<p>Với mỗi test case, in ra số nguyên là số đường mà Xunayed có thể tiếp cận Nurulla.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>2\n1 1\n2 2\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>1\n2\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/NUMPATH/">http://www.spoj.com/problems/NUMPATH/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>Bài toán này tôi sẽ dùng <a href="/the-algorithms-blog/category/vet-can-brute-force/">thuật toán vét cạn Brute force</a>, được triển khai bằng đệ quy để duyệt hết tất cả các trường hợp. Điểm bắt đầu là (0, 0) và điểm đích là (R-1,C-1). Tại mỗi điểm chỉ có thể đi xuống, hoặc sang bên phải.</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919462" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-numpath-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-numpath-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-numpath-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-numpath-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-numpath-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-numpath-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> R, C;</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-numpath-cpp-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Matrix[<span class="pl-c1">7</span>][<span class="pl-c1">7</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-numpath-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Num_path;</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-numpath-cpp-LC7" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-numpath-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Visit</span>(<span class="pl-k">int</span> row, <span class="pl-k">int</span> col)</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-numpath-cpp-LC9" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-numpath-cpp-LC10" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Nếu đi được đến điểm đích thì tăng số đường lên 1 </span></td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-numpath-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(row == R-<span class="pl-c1">1</span> &amp;&amp; col == C-<span class="pl-c1">1</span>) Num_path++;</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-numpath-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">else</span></td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-numpath-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-numpath-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Nếu sang bên phải</span></td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-numpath-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(row + <span class="pl-c1">1</span> &lt;= R-<span class="pl-c1">1</span>) <span class="pl-c1">Visit</span>(row + <span class="pl-c1">1</span>,col);</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-numpath-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-numpath-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Nếu đi xuống dưới</span></td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-numpath-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(col + <span class="pl-c1">1</span> &lt;= C-<span class="pl-c1">1</span>) <span class="pl-c1">Visit</span>(row,col + <span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-numpath-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-numpath-cpp-LC20" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-numpath-cpp-LC21" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-numpath-cpp-LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>() </td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-numpath-cpp-LC23" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-numpath-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> Testcase;</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-numpath-cpp-LC25" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; Testcase;</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-numpath-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; Testcase; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-numpath-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-numpath-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; R &gt;&gt; C;</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-numpath-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\tNum_path = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-numpath-cpp-LC30" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-numpath-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">Visit</span>(<span class="pl-c1">0</span>, <span class="pl-c1">0</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-numpath-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; Num_path &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-numpath-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-numpath-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-numpath-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-numpath-cpp-LC35" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/ccde13f040b60ac7db007bc13f762f89/raw/54e3fe5449a4ee16fb181c19c6155b205beea341/NUMPATH.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/ccde13f040b60ac7db007bc13f762f89#file-numpath-cpp">NUMPATH.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-11-05---spoj-com-thuat-toan-bai-numpath-gutibazi/spoj-com-thuat-toan-bai-numpath-gutibazi.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài NUMPATH - Gutibazi",date:"05/11/2016",categories:["spoj","Vét cạn - Brute Force"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","vét cạn brute force"]},fields:{slug:"/spoj-com-thuat-toan-bai-numpath-gutibazi/"},excerpt:"Đề bài: Xunayed rất là mạnh mẽ. Anh ấy đã phát hiện ra rằng bạn của anh ta là Nurulla - người giống với anh trai mình, đã làm một việc không…",timeToRead:4},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài NSTEPS - Number Steps"},fields:{slug:"/spoj-com-thuat-toan-bai-nsteps-number-steps/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài ONP - Transform the Expression"},fields:{slug:"/spoj-com-thuat-toan-bai-onp-transform-the-expression/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-numpath-gutibazi/",prevSlug:"/spoj-com-thuat-toan-bai-nsteps-number-steps/",nextSlug:"/spoj-com-thuat-toan-bai-onp-transform-the-expression/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-numpath-gutibazi-70ee72ecc2e35b1c98ef.js.map