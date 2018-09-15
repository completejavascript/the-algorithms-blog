webpackJsonp([0xc2f462a8b5d2],{765:function(n,s){n.exports={data:{post:{html:'<h2><strong>Đề bài:</strong></h2>\n<p>Thái là bạn cùng lớp với Học – người rất giỏi về lập trình và đã tạo ra dãy số nguyên tố rất hay. Thái cảm thấy ghen tị với Học nên quyết định tạo nên dãy số cho riêng mình. Bởi vì anh ấy không quá sáng tạo, nên đã tạo ra một dãy với định nghĩa tương tự như của Học, chỉ khác ở f(n), cụ thể là: </p>\n<ul>\n<li>\n<p>a[0] = a[1] = 0; </p>\n</li>\n<li>\n<p>Với n > 1, a[n] = a[n-1] + f(n), trong đó, f(n) là tổng các số nguyên dương ở tập S </p>\n</li>\n<li>\n<p>Với S = {x | x &#x3C; n và n % x = 0}</p>\n</li>\n</ul>\n<p>Bây giờ, Học đã yêu cầu Thái lập trình để tìm ra f(n) – như Thái đã định nghĩa. Do đó, Thái mong muốn sự giúp đỡ của bạn bởi vì anh ta không biết về lập trình. Nhiệm vụ của bạn đơn giản là tìm a[n] với số n cho trước (n &#x3C; 10^6)</p>\n<h3><strong>Đầu vào:</strong></h3>\n<p>Bạn được cho nhiều test case. Dòng đầu tiên bao gồm số T (T &#x3C;= 100), tổng số test case. T dòng tiếp theo chứa một số nguyên dương duy nhất N với 1 &#x3C; N &#x3C; 10^6.</p>\n<h3><strong>Đầu ra:</strong></h3>\n<p>Mỗi test case, in ra một dòng duy nhất là số a[n], được định nghĩa như trên.</p>\n<h3><strong>Ví dụ:</strong></h3>\n<p><strong>Đầu vào:</strong> </p>\n<p>3 </p>\n<p>3 </p>\n<p>4 </p>\n<p>5 </p>\n<p><strong>Đầu ra:</strong> </p>\n<p>2 </p>\n<p>5 </p>\n<p>6 </p>\n<p><strong>Giải thích:</strong> </p>\n<p>f(2) = 1 {1} </p>\n<p>f(3) = 1 {1} </p>\n<p>f(4) = 3 {1, 2} </p>\n<p>f(5) = 1 {1} </p>\n<p><strong>Do đó:</strong> </p>\n<p>a[2] = a[1] + f[2] = 0 + 1 = 1; </p>\n<p>a[3] = a[2] + f[3] = 1 + 1 = 2; </p>\n<p>a[4] = a[3] + f[4] = 2 + 3 = 5; </p>\n<p>a[5] = a[4] + f[5] = 5 + 1 = 6; </p>\n<p><em>Các bạn có thể tham khảo đề bài tiếng anh và submit tại đây: <a href="http://www.spoj.com/problems/AFS/">http://www.spoj.com/problems/AFS/</a></em></p>\n<h3><strong>Phân tích:</strong></h3>\n<ul>\n<li>\n<p>Ở đây ta có thể áp dụng đúng công thức để tính cho mỗi test case. Tuy nhiên, như vậy sẽ dẫn đến việc phải lập lại quá trình tính toán rất nhiều. Điều này sẽ dẫn đến time limit. </p>\n</li>\n<li>\n<p>Khi đó thuật toán ta phải dùng là thuật toán <a href="/the-algorithms-blog/category/quy-hoach-dong-dynamic-programming/">quy hoạch động - Dynamic programming</a>. Đối với những bài toán kiểu này, ta sẽ tính toán một lần và lưu kết quả đó vào một mảng. Như vậy, ta chỉ cần tính toán một lần. Và với mỗi test case chỉ in ra kết quả.</p>\n</li>\n</ul>\n<h2><strong>Lời giải:</strong></h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3><strong>Code C/C++:</strong></h3>\n<p><div id="gist91916657" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-afs-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-afs-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-afs-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-afs-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-afs-cpp-LC3" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-afs-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">typedef</span> <span class="pl-k">unsigned</span> <span class="pl-k">long</span> <span class="pl-k">long</span> ull;</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-afs-cpp-LC5" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-afs-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> ull MAX = <span class="pl-c1">1000005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-afs-cpp-LC7" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-afs-cpp-LC8" class="blob-code blob-code-inner js-file-line">ull a[MAX];            <span class="pl-c"><span class="pl-c">//</span> Lưu mảng a</span></td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-afs-cpp-LC9" class="blob-code blob-code-inner js-file-line">ull f[MAX];            <span class="pl-c"><span class="pl-c">//</span> Lưu mảng f</span></td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-afs-cpp-LC10" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-afs-cpp-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">CreateArray</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-afs-cpp-LC12" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-afs-cpp-LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(ull i = <span class="pl-c1">0</span>; i &lt; MAX; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-afs-cpp-LC14" class="blob-code blob-code-inner js-file-line">        a[i] = f[i] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-afs-cpp-LC15" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-afs-cpp-LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Tạo mảng f</span></td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-afs-cpp-LC17" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(ull k = <span class="pl-c1">1</span>; k &lt; MAX; k++)</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-afs-cpp-LC18" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-afs-cpp-LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Cập nhật cho tất cả các số j có ước số là k</span></td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-afs-cpp-LC20" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(ull j = k*<span class="pl-c1">2</span>; j &lt; MAX; j += k)</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-afs-cpp-LC21" class="blob-code blob-code-inner js-file-line">            f[j] += k;    </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-afs-cpp-LC22" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-afs-cpp-LC23" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-afs-cpp-LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Tạo mảng a</span></td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-afs-cpp-LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(ull i = <span class="pl-c1">2</span>; i &lt; MAX; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-afs-cpp-LC26" class="blob-code blob-code-inner js-file-line">        a[i] = a[i-<span class="pl-c1">1</span>] + f[i];</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-afs-cpp-LC27" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-afs-cpp-LC28" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-afs-cpp-LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-afs-cpp-LC30" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-afs-cpp-LC31" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-afs-cpp-LC32" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-afs-cpp-LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> comment dòng này trước khi submit</span></td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-afs-cpp-LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-afs-cpp-LC35" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-afs-cpp-LC36" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">CreateArray</span>();</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-afs-cpp-LC37" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-afs-cpp-LC38" class="blob-code blob-code-inner js-file-line">    ull T;</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-afs-cpp-LC39" class="blob-code blob-code-inner js-file-line">    cin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-afs-cpp-LC40" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-afs-cpp-LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(ull tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-afs-cpp-LC42" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-afs-cpp-LC43" class="blob-code blob-code-inner js-file-line">        ull n;</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-afs-cpp-LC44" class="blob-code blob-code-inner js-file-line">        cin &gt;&gt; n;</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-afs-cpp-LC45" class="blob-code blob-code-inner js-file-line">        cout &lt;&lt; a[n] &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-afs-cpp-LC46" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-afs-cpp-LC47" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-afs-cpp-LC48" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-afs-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-afs-cpp-LC49" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/f2e88ca80ec0490d8d710bcf7f5abc3a/raw/211a4f0ea644b6fd0ee536ac96d712450ca41687/AFS.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/f2e88ca80ec0490d8d710bcf7f5abc3a#file-afs-cpp">AFS.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-09-25---spoj-com-thuat-toan-bai-afs-amazing-factor-sequence/spoj-com-thuat-toan-bai-afs-amazing-factor-sequence.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài AFS – Amazing Factor Sequence",date:"25/09/2016",categories:["spoj","Quy hoạch động - Dynamic programming"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","quy hoạch động dynamic programming"]},fields:{slug:"/spoj-com-thuat-toan-bai-afs-amazing-factor-sequence/"},excerpt:"Đề bài: Thái là bạn cùng lớp với Học – người rất giỏi về lập trình và đã tạo ra dãy số nguyên tố rất hay. Thái cảm thấy ghen tị với Học nên…",timeToRead:4},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài ABA12C – Buying Apples"},fields:{slug:"/spoj-com-thuat-toan-bai-aba12c-buying-apples/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài AGGRCOW – Aggressive cows"},fields:{slug:"/spoj-com-thuat-toan-bai-aggrcow-aggressive-cows/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-afs-amazing-factor-sequence/",prevSlug:"/spoj-com-thuat-toan-bai-aba12c-buying-apples/",nextSlug:"/spoj-com-thuat-toan-bai-aggrcow-aggressive-cows/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-afs-amazing-factor-sequence-ecbcd28c9d05faf31e47.js.map