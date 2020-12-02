var data = [
    {
        quantity:1.5,
        description:'Stock Item Example 0001',
        unitPrice:	1000.00,
        amount:	1500.00
    },
    {
        quantity:1,
        description:	"Stock Item Example 0002",
        unitPrice: 2000.00,
        amount:	2000.00
    },
    {
    quantity:1,
    description:	"Service Charge Invoicing Item 001",
    unitPrice:	100.00,
    amount:	200.00
    },
    {
        quantity:1,
        description:	`Service Charge Invoicing Item 002<br/>
    Additional line 1 for this item<br/>
    Additional line 2 for this item`,
    unitPrice:200.00,
    amount:	600.00
    }
]

function renderDataTable() {
    let subTotal = 0
    $('#dataTable').html("")
    data.forEach(function (item) {
        subTotal += item.amount
        let dataRow = `<tr>
    <td class="data r">${item.quantity}</td>
    <td class="data">${item.description}</td>
    <td class="data r">${item.unitPrice}</td>
    <td class="data r">${item.amount}</td>
    </tr>`
        console.log({ dataRow })
        $('#dataTable').append(dataRow)
    })
    let salesTax = subTotal*0.07
    let totalDue = subTotal + salesTax
    $("#subTotal").html(subTotal.toFixed(2))
    $("#salesTax").html(salesTax.toFixed(2))
    $("#totalDue").html(totalDue.toFixed(2))
}

$(document).ready(
    function() {
        let count = 0
        console.log("Hello!")

        let d = new Date()
        let dateStr = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
        $('#currentdate').html(dateStr)

        renderDataTable()
        $('#btnAdd').click(
            function() {
                console.log("Clicked!", count)
                count++
                // let textbox = prompt("Sub Total")
                // $('#subTotal').html(textbox)
                let qty = prompt("Quantity")
                let des = prompt("Description")
                let pri = prompt("Unit Price")
                let amt = parseFloat(qty) * parseFloat(pri)
                // console.log({qty,des,pri,amt})
                let item = {
                    quantity: qty,
                    description: des,
                    unitPrice: pri,
                    amount: amt
                }
                console.log({data})
                data.push(item)
                renderDataTable()
            }
        )
    }
)
