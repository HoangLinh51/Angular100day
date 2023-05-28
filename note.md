\*\*\*day 4: ngIf:
-là 1 Structural Directive(thay đổi cấu trúc DOM có thể lấy component ra khỏi DOM và có thể bỏ element(component) mới vào DOM)
-giống như điều kiện if-else
-hiden công dụng gần giống nhau

<------------EXAMPLE------------>
(1)
<hello \*ngIf="user.age >= 18" [name]="user.name"></hello>

    <div *ngIf="user.age < 18">
      abcd
    </div>

(2)
<hello \*ngIf="user.age >= 18;else under18" [name]="user.name"></hello>

<ng-temple #under18>

  <div >
    abcd
  </div>
</ng-temple>

<------cú pháp đầy đủ------>

<ng-temple [ngIf]="user.age >= 18" [ngIfElse]="under18">
<hello \*ngIf="user.age >= 18;else under18" [name]="user.name"></hello>
</ng-temple>

<ng-temple #under18>

  <div >
    abcd
  </div>
</ng-temple>
<------------END------------>

\*\*\*day 5: ngFor
-dùng để lặp(vòng lặp), lọc danh sách và in ra
-có một số biến mình có thể truy cập tới được:
+$implicit: item Implicit Context Variable
+index: số thứ tự của item hiện tại
+count: độ dài của array
+first: true nếu như item đó là item đầu tiên trong array
+last: true nếu như item đó là item cuối cùng trong array
+even: true nếu như item đó là item vị trí chẳn
+odd: true nếu như item đó là item vị trí lẻ

<------------EXAMPLE------------>
(1)

<ul>
<li *ngFor="let u ò user">{{u.id}} - {{u.name}} - {{u.phone}}</li>
</ul>

(2)

<ul>
  <li *ngFor="let u of users; index as b; count as total; first as isFirst; last as isLast; even as isEven; odd as isOdd">
    <span>{{u.id}} - {{u.name}} -  {{u.phone}}</span>
    <br>
    <span>at index {{b}} out of {{total}}</span>
    <br>
    <span *ngIf="isEven">i am even number</span>
    <br>
    <span *ngIf="isOdd">i am odd number</span>
    <br>
    <span *ngIf="isLast">i am last</span>
    <br>
    <span *ngIf="isFirst">i am first</span>
    <br><br><br>
  </li>
</ul>

\*\*\*day 6: class biding & style biding

- là 2 dạng data biding thường dùng để thay đổi cái hiển thị(class, style)
  \*class:
  -khuyến khích được sử dụng vì nó không cần pahir thông qua nhiều logic thay vì phải sử dụng ngClass
  -có nhiều cách đưa dữ liệu vào:
  <button (click)="isDanger = !isDanger">Danger</button>
  <br>
  <button (click)="isWarning = !isWarning">Warning</button>

-[class.ten-class] --- <div class="box" [class.red-border]="isDanger" [class.green-background]="isWarning"></div>

-[class] = "array" --- <div class="box" [class]="['red-border', 'green-background']"></div>

-[class] = "object" --- <div class="box" [class]="{'red-border': isDanger, 'green-background': isWarning}"></div>

-[class] = "variable" --- <div></div>

\*style:
-cx có nhiều cách gọi :
[style.tenStyle] --- <h1 [style.color]="'red'">{{title}}</h1>
[style.ten-style] --- <h1 [style.background-color]="'green'">{{title}}</h1>
[style.tenStyle.unit] --- <h1 [style.fontSize.rem]="2">{{title}}</h1>
[style]="object" --- <h1 [style]="{color: 'yellow', backgroundColor: 'black'}">{{title}}</h1>
[style.css-variable] --- <h1 [style.--text-color]="isDanger ? 'red' : 'blue'" [style]="{color:'var(--text-color)'}">{{title}}</h1>
<------------END------------>
