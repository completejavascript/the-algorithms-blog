webpackJsonp([45707989190864],{801:function(n,t){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Có N khách sạn dọc theo bờ biển Adriatic. Mỗi khách sạn sẽ có một giá tiền riêng. Sroljo đã trúng sổ xố được M tiền. Bây giờ anh ấy muốn mua một dãy những khách sạn liên tiếp. Sao cho tổng giá trị của chúng là lớn nhất. Nhưng chúng không được lớn hơn M.</p>\n<p>Bạn hãy tính giá trị lớn nhất này.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên của đầu vào là 2 số N và M (1 ≤ N ≤ 300 000, 1 ≤ M &#x3C; 2<sup>31</sup>). Dòng tiếp theo sẽ có N số nhỏ hơn 10<sup>6</sup>. Biểu diễn giá trị của những khách sạn trên.</p>\n<h3>Đầu ra:</h3>\n<p>In ra kết quả cần tìm (biết kết quả lớn hơn 0)</p>\n<h3>Ví dụ 1:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>5 12\n2 1 3 4 5\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<p>12</p>\n<h3>Ví dụ 2:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>4 9\n7 3 5 6\n</code></pre>\n<p><strong>Đầu ra:</strong> </p>\n<p>8 </p>\n<p>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/HOTELS/">http://www.spoj.com/problems/HOTELS/</a></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>Tôi sẽ sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a>, và thuật toán đó là thuật toán dịch cửa sổ Sliding Window. Tôi sẽ duyệt từ đầu đến cuối. Tôi sử dụng một biến trỏ vào đầu dãy, biến thứ 2 dùng để chạy từ 1 đến hết dãy. Biến thứ 2 sẽ tăng cho đến khi tổng của dãy số lớn hơn M thì dừng lại. Lúc này tôi được một giá trị là số lượng những khách sạn. Sau đó tăng con trỏ thứ nhất lên cho đến khi tổng của dãy nhỏ hơn M thì tôi lại tiếp tục tăng biến thứ 2. Quá trình duyệt tiếp tục như vậy cho đến hết là tôi sẽ tìm được kết quả.</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91921042" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-hotels-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-hotels-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-hotels-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>stdio.h<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-hotels-cpp-LC2" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-hotels-cpp-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-hotels-cpp-LC4" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-hotels-cpp-LC5" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> n = <span class="pl-c1">0</span>, m = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-hotels-cpp-LC6" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">scanf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d%d<span class="pl-pds">&quot;</span></span>,&amp;n,&amp;m);</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-hotels-cpp-LC7" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-hotels-cpp-LC8" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> *a = <span class="pl-k">new</span> <span class="pl-k">int</span>[n];</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-hotels-cpp-LC9" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; n; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-hotels-cpp-LC10" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">scanf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d<span class="pl-pds">&quot;</span></span>,&amp;a[i]);</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-hotels-cpp-LC11" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-hotels-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> st = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-hotels-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> i  = st;</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-hotels-cpp-LC14" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-hotels-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> sum = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-hotels-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> max = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-hotels-cpp-LC17" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-hotels-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(i &lt; n)</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-hotels-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-hotels-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t\tsum += a[i];</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-hotels-cpp-LC21" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-hotels-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(sum &gt; m)</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-hotels-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-hotels-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\t\tsum -= a[i];</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-hotels-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(sum &gt; max) max = sum;</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-hotels-cpp-LC26" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-hotels-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t\tsum += a[i];</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-hotels-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">while</span>(sum &gt; m) </td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-hotels-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\t\t\tsum -= a[st++];</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-hotels-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-hotels-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\ti++;</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-hotels-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-hotels-cpp-LC33" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-hotels-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(sum &gt; max) max = sum;</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-hotels-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">printf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d<span class="pl-cce">\\n</span><span class="pl-pds">&quot;</span></span>,max);</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-hotels-cpp-LC36" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-hotels-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">delete[]</span> a;</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-hotels-cpp-LC38" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-hotels-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-hotels-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-hotels-cpp-LC40" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/960ce1d979d45eb851a6b1e29f37e69a/raw/b397452ad0c223947807dc6508df84a02f0d7bf5/HOTELS.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/960ce1d979d45eb851a6b1e29f37e69a#file-hotels-cpp">HOTELS.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-12-07---spoj-com-thuat-toan-bai-hotels-hotels-along-the-croatian-coast/spoj-com-thuat-toan-bai-hotels-hotels-along-the-croatian-coast.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài HOTELS - Hotels Along the Croatian Coast",date:"07/12/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-hotels-hotels-along-the-croatian-coast/"},excerpt:"Đề bài: Có N khách sạn dọc theo bờ biển Adriatic. Mỗi khách sạn sẽ có một giá tiền riêng. Sroljo đã trúng sổ xố được M tiền. Bây giờ anh ấy…",timeToRead:3},prevPost:{frontmatter:{title:"SPOJ.COM - Thuật toán bài SDITSAVL - AVL Tree"},fields:{slug:"/spoj-com-thuat-toan-bai-sditsavl-avl-tree/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài IITKWPCO - Create Collections"},fields:{slug:"/spoj-com-thuat-toan-bai-iitkwpco-create-collections/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-hotels-hotels-along-the-croatian-coast/",prevSlug:"/spoj-com-thuat-toan-bai-sditsavl-avl-tree/",nextSlug:"/spoj-com-thuat-toan-bai-iitkwpco-create-collections/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-hotels-hotels-along-the-croatian-coast-b82b26e72f93fea978e0.js.map