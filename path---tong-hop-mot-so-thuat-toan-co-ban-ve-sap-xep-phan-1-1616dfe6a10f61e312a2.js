webpackJsonp([0xa7d92eb6c73a],{961:function(n,s){n.exports={data:{post:{html:'<p>Hôm nay, mình sẽ chia sẻ với các bạn một số thuật toán cơ bản về sắp xếp. Những thuật toán sau thường dễ để triển khai, tuy nhiên thì độ phức tạp của chúng là N^2. Vì vậy, những thuật toán này chỉ áp dụng cho những bài toán với số lượng phần tử nhỏ. Với những bài toán có số lượng phần tử lớn thì ta sẽ sử dụng những thuật toán nhanh hơn – sẽ được giới thiệu ở phần sau.</p>\n<h2>Thuật toán sắp xếp chọn trực tiếp – Selection sort</h2>\n<p><div id="gist91847666" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-selection_sort-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-selection_sort-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-selection_sort-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">SelectionSort</span>(<span class="pl-k">int</span> *a, <span class="pl-k">int</span> N)</td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-selection_sort-cpp-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-selection_sort-cpp-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; N - <span class="pl-c1">1</span>; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-selection_sort-cpp-LC4" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-selection_sort-cpp-LC5" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">int</span> idmin = i;</td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-selection_sort-cpp-LC6" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-selection_sort-cpp-LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Tìm ra phần tử có giá trị nhỏ nhất</span></td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-selection_sort-cpp-LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">int</span> j = i + <span class="pl-c1">1</span>; j &lt; N; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-selection_sort-cpp-LC9" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(a[j] &lt; a[idmin]) </td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-selection_sort-cpp-LC10" class="blob-code blob-code-inner js-file-line">                idmin = j;</td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-selection_sort-cpp-LC11" class="blob-code blob-code-inner js-file-line">            </td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-selection_sort-cpp-LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Đổi chỗ phần tử đầu tiên của dãy còn lại với phần tử nhỏ nhất</span></td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-selection_sort-cpp-LC13" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">swap</span>(a[i], a[idmin]);</td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-selection_sort-cpp-LC14" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-selection_sort-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-selection_sort-cpp-LC15" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/3ec23a5aaea325035f46051a6cc66721/raw/96bdf53364bd922cd66a77560ad648cd879415a1/selection_sort.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/3ec23a5aaea325035f46051a6cc66721#file-selection_sort-cpp">selection_sort.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán sắp xếp chèn trực tiếp – Insertion sort</h2>\n<p><div id="gist91848033" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-insertion_sort-js" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-javascript ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-insertion_sort-js-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-insertion_sort-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">InsertionSort</span>(int <span class="pl-k">*</span>a, int <span class="pl-c1">N</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-insertion_sort-js-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-insertion_sort-js-LC3" class="blob-code blob-code-inner js-file-line">    int pos, x;</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-insertion_sort-js-LC4" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-insertion_sort-js-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(int i <span class="pl-k">=</span> <span class="pl-c1">1</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">N</span>; i<span class="pl-k">++</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-insertion_sort-js-LC6" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-insertion_sort-js-LC7" class="blob-code blob-code-inner js-file-line">        pos <span class="pl-k">=</span> i <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-insertion_sort-js-LC8" class="blob-code blob-code-inner js-file-line">        x <span class="pl-k">=</span> a[i];</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-insertion_sort-js-LC9" class="blob-code blob-code-inner js-file-line">                </td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-insertion_sort-js-LC10" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> giả sử dãy a[0], a[1], ... , a[i] đã sắp xếp</span></td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-insertion_sort-js-LC11" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> bắt đầu từ a[i], duyệt về đầu mảng và tìm vị trí thích hợp cho a[i]</span></td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-insertion_sort-js-LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">while</span>(pos <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> a[pos] <span class="pl-k">&gt;</span> x)</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-insertion_sort-js-LC13" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-insertion_sort-js-LC14" class="blob-code blob-code-inner js-file-line">            a[pos <span class="pl-k">+</span> <span class="pl-c1">1</span>] <span class="pl-k">=</span> a[pos];</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-insertion_sort-js-LC15" class="blob-code blob-code-inner js-file-line">            pos<span class="pl-k">--</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-insertion_sort-js-LC16" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-insertion_sort-js-LC17" class="blob-code blob-code-inner js-file-line">     </td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-insertion_sort-js-LC18" class="blob-code blob-code-inner js-file-line">        a[pos<span class="pl-k">+</span><span class="pl-c1">1</span>] <span class="pl-k">=</span> x;</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-insertion_sort-js-LC19" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-insertion_sort-js-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-insertion_sort-js-LC20" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/95d916784fb804bf5af3e21a827f2f3b/raw/0f4f668e63727a6fa4c7e46a20b17b496df5802f/insertion_sort.js" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/95d916784fb804bf5af3e21a827f2f3b#file-insertion_sort-js">insertion_sort.js</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán sắp xếp chèn trực tiếp dựa trên tìm kiếm nhị phân – Binary insertion sort</h2>\n<p><div id="gist91848062" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-binary_insertion_sort-js" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-javascript ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-binary_insertion_sort-js-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-binary_insertion_sort-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">BinaryInsertionSort</span>(int <span class="pl-k">*</span>a, int <span class="pl-c1">N</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-binary_insertion_sort-js-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-binary_insertion_sort-js-LC3" class="blob-code blob-code-inner js-file-line">    int l, r, m, x;</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-binary_insertion_sort-js-LC4" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-binary_insertion_sort-js-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(int i <span class="pl-k">=</span> <span class="pl-c1">1</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">N</span>; i<span class="pl-k">++</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-binary_insertion_sort-js-LC6" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-binary_insertion_sort-js-LC7" class="blob-code blob-code-inner js-file-line">        l <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-binary_insertion_sort-js-LC8" class="blob-code blob-code-inner js-file-line">        r <span class="pl-k">=</span> i <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-binary_insertion_sort-js-LC9" class="blob-code blob-code-inner js-file-line">        x <span class="pl-k">=</span> a[i];</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-binary_insertion_sort-js-LC10" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-binary_insertion_sort-js-LC11" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Tương tự như Insertionsort nhưng ở đây</span></td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-binary_insertion_sort-js-LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> ta dựa vào tìm kiếm nhị phân để xác định</span></td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-binary_insertion_sort-js-LC13" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> vị trí phù hợp cho a[i] được nhanh hơn</span></td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-binary_insertion_sort-js-LC14" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">while</span> (l <span class="pl-k">&lt;=</span> r)</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-binary_insertion_sort-js-LC15" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-binary_insertion_sort-js-LC16" class="blob-code blob-code-inner js-file-line">            m <span class="pl-k">=</span> (l <span class="pl-k">+</span> r) <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-binary_insertion_sort-js-LC17" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(a[m] <span class="pl-k">&gt;</span> x) r <span class="pl-k">=</span> m <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-binary_insertion_sort-js-LC18" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> l <span class="pl-k">=</span> m <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-binary_insertion_sort-js-LC19" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-binary_insertion_sort-js-LC20" class="blob-code blob-code-inner js-file-line">     </td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-binary_insertion_sort-js-LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(int j <span class="pl-k">=</span> i; j <span class="pl-k">&gt;</span> l; j<span class="pl-k">--</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-binary_insertion_sort-js-LC22" class="blob-code blob-code-inner js-file-line">            a[j] <span class="pl-k">=</span> a[j<span class="pl-k">-</span><span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-binary_insertion_sort-js-LC23" class="blob-code blob-code-inner js-file-line">     </td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-binary_insertion_sort-js-LC24" class="blob-code blob-code-inner js-file-line">        a[l] <span class="pl-k">=</span> x;</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-binary_insertion_sort-js-LC25" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-binary_insertion_sort-js-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-binary_insertion_sort-js-LC26" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/1d6f4d2a2266feb1058844dcb52c2a81/raw/108112ab78320d28aada0f638cef7a6b3f25f84a/binary_insertion_sort.js" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/1d6f4d2a2266feb1058844dcb52c2a81#file-binary_insertion_sort-js">binary_insertion_sort.js</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán sắp xếp đổi chỗ trực tiếp – Interchange sort</h2>\n<p><div id="gist91848076" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-inter_change_sort-js" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-javascript ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-inter_change_sort-js-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-inter_change_sort-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">InterChangeSort</span>(int <span class="pl-k">*</span>a, int <span class="pl-c1">N</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-inter_change_sort-js-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-inter_change_sort-js-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-inter_change_sort-js-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-inter_change_sort-js-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(int i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">N</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>; i<span class="pl-k">++</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-inter_change_sort-js-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-inter_change_sort-js-LC4" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(int j <span class="pl-k">=</span> i <span class="pl-k">+</span> <span class="pl-c1">1</span>; j <span class="pl-k">&lt;</span> <span class="pl-c1">N</span>; j<span class="pl-k">++</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-inter_change_sort-js-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-inter_change_sort-js-LC5" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(a[j] <span class="pl-k">&lt;</span> a[i])</td>\n      </tr>\n      <tr>\n        <td id="file-inter_change_sort-js-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-inter_change_sort-js-LC6" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">swap</span>(a[j], a[i]);</td>\n      </tr>\n      <tr>\n        <td id="file-inter_change_sort-js-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-inter_change_sort-js-LC7" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/8fbf9101e67737b1d2c07c06cde962fb/raw/c4b2270009236126270e1b64aeedbad6ce84c563/inter_change_sort.js" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/8fbf9101e67737b1d2c07c06cde962fb#file-inter_change_sort-js">inter_change_sort.js</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán sắp xếp nổi bọt – Bubble sort</h2>\n<p><div id="gist91848160" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-bubble_sort-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-bubble_sort-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-bubble_sort-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">BubbleSort</span>(<span class="pl-k">int</span> *a, <span class="pl-k">int</span> N)</td>\n      </tr>\n      <tr>\n        <td id="file-bubble_sort-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-bubble_sort-cpp-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-bubble_sort-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-bubble_sort-cpp-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; N-<span class="pl-c1">1</span>; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-bubble_sort-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-bubble_sort-cpp-LC4" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">int</span> j = N-<span class="pl-c1">1</span>; j &gt; i; j--)</td>\n      </tr>\n      <tr>\n        <td id="file-bubble_sort-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-bubble_sort-cpp-LC5" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(a[j] &lt; a[j-<span class="pl-c1">1</span>])</td>\n      </tr>\n      <tr>\n        <td id="file-bubble_sort-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-bubble_sort-cpp-LC6" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">swap</span>(a[j], a[j-<span class="pl-c1">1</span>]);</td>\n      </tr>\n      <tr>\n        <td id="file-bubble_sort-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-bubble_sort-cpp-LC7" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/8cc86f59acea9397b45c2b3bd3121575/raw/91b79e3933576a3aec7be02848badd4a2bb20e07/bubble_sort.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/8cc86f59acea9397b45c2b3bd3121575#file-bubble_sort-cpp">bubble_sort.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán sắp xếp Shaker sort</h2>\n<p><div id="gist91848190" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-shaker_sort-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-shaker_sort-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-shaker_sort-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">ShakerSort</span>(<span class="pl-k">int</span> *a, <span class="pl-k">int</span> N)</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-shaker_sort-cpp-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-shaker_sort-cpp-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Thuật toán cải tiến thuật toán sắp xếp nổi bọt</span></td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-shaker_sort-cpp-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Bình thường khi ta sắp xếp nổi bọt, giả sử tăng dần</span></td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-shaker_sort-cpp-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Thì phần tử nhỏ nhất sẽ được dồn về trái, dần dần cho đến hết.</span></td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-shaker_sort-cpp-LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Còn với thuật toán này ta sẽ dồn phần tử nhỏ nhất về trái, phần tử lớn lớn sang phải đồng thời</span></td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-shaker_sort-cpp-LC7" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">int</span> left, right, k;</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-shaker_sort-cpp-LC8" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-shaker_sort-cpp-LC9" class="blob-code blob-code-inner js-file-line">    left = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-shaker_sort-cpp-LC10" class="blob-code blob-code-inner js-file-line">    right = N-<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-shaker_sort-cpp-LC11" class="blob-code blob-code-inner js-file-line">    k = N-<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-shaker_sort-cpp-LC12" class="blob-code blob-code-inner js-file-line">            </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-shaker_sort-cpp-LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(left &lt; right)</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-shaker_sort-cpp-LC14" class="blob-code blob-code-inner js-file-line">    {       </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-shaker_sort-cpp-LC15" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">int</span> j = right; j &gt; left; j--)</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-shaker_sort-cpp-LC16" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-shaker_sort-cpp-LC17" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(a[j] &lt; a[j-<span class="pl-c1">1</span>])</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-shaker_sort-cpp-LC18" class="blob-code blob-code-inner js-file-line">            { </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-shaker_sort-cpp-LC19" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">swap</span>(a[j], a[j-<span class="pl-c1">1</span>]); </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-shaker_sort-cpp-LC20" class="blob-code blob-code-inner js-file-line">                k = j;  </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-shaker_sort-cpp-LC21" class="blob-code blob-code-inner js-file-line">            }              </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-shaker_sort-cpp-LC22" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-shaker_sort-cpp-LC23" class="blob-code blob-code-inner js-file-line">        left = k;</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-shaker_sort-cpp-LC24" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-shaker_sort-cpp-LC25" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">int</span> j = left; j &lt; right; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-shaker_sort-cpp-LC26" class="blob-code blob-code-inner js-file-line">        {  </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-shaker_sort-cpp-LC27" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (a[j] &gt; a[j+<span class="pl-c1">1</span>])</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-shaker_sort-cpp-LC28" class="blob-code blob-code-inner js-file-line">            { </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-shaker_sort-cpp-LC29" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">swap</span>(a[j], a[j+<span class="pl-c1">1</span>]); </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-shaker_sort-cpp-LC30" class="blob-code blob-code-inner js-file-line">                k = j;</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-shaker_sort-cpp-LC31" class="blob-code blob-code-inner js-file-line">            }    </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-shaker_sort-cpp-LC32" class="blob-code blob-code-inner js-file-line">        } </td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-shaker_sort-cpp-LC33" class="blob-code blob-code-inner js-file-line">        right = k;</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-shaker_sort-cpp-LC34" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-shaker_sort-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-shaker_sort-cpp-LC35" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/ca7b8f5ffa02c7539f15576d3944b803/raw/85cac0a6e780616e67bd509c4e5bdb930dee3cc5/shaker_sort.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/ca7b8f5ffa02c7539f15576d3944b803#file-shaker_sort-cpp">shaker_sort.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p>Code by Phạm Văn Lâm</p>',
id:"f:/Github/the-algorithms-blog/src/posts/2016-09-23---tong-hop-mot-so-thuat-toan-co-ban-ve-sap-xep-phan-1/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Tổng hợp một số thuật toán cơ bản về sắp xếp - Phần 1",date:"23/09/2016",categories:["Thuật toán cơ bản"],tags:["phạm văn lâm","sắp xếp","sorting","thuật toán cơ bản","thuật toán sắp xếp cơ bản"]},fields:{slug:"/tong-hop-mot-so-thuat-toan-co-ban-ve-sap-xep-phan-1/"},excerpt:"Hôm nay, mình sẽ chia sẻ với các bạn một số thuật toán cơ bản về sắp xếp. Những thuật toán sau thường dễ để triển khai, tuy nhiên thì độ…",timeToRead:7},prevPost:{frontmatter:{title:"Tổng hợp một số thuật toán cơ bản về sắp xếp - Phần 2"},fields:{slug:"/tong-hop-mot-so-thuat-toan-co-ban-ve-sap-xep-phan-2/"}},nextPost:null,site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/tong-hop-mot-so-thuat-toan-co-ban-ve-sap-xep-phan-1/",prevSlug:"/tong-hop-mot-so-thuat-toan-co-ban-ve-sap-xep-phan-2/",nextSlug:""}}}});
//# sourceMappingURL=path---tong-hop-mot-so-thuat-toan-co-ban-ve-sap-xep-phan-1-1616dfe6a10f61e312a2.js.map