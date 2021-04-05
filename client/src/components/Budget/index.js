import React, { useState, useEffect } from "react"
import API from '../../utils/API'

export default function() {
    
    const [user, setUser] = useState({
        budgetCategories: []
    });
    const [showCategoryForm, setShowCategoryForm] = useState(false)
    const [showLineItemForm, setShowLineItemForm] = useState(false)
    const [lineItemCategory, setLineItemCategory] = useState('')

    useEffect(() => {
        API.getUser().then(resp => {
            setUser(resp.data)
        })
    }, [])

    function saveCategory(desc) {
        console.log('saveCategory')
        if (!desc?.trim()) {
            return
        }
        API.addBudgetCategory({
            desc: desc,
            lineItems: []
        }).then(resp => {
            setUser(resp.data)
            setShowCategoryForm(false)
        })
    }

    function deleteCategory(category) {
        console.log('deleteCategory')
        if (!category?.trim()) {
            return
        }
        let categories = user.budgetCategories
            .filter(c => c.desc !== category)
        API.updateBudgetCategories(categories).then(resp => {
            setUser(resp.data)
        })
    }

    function handleShowLineItemForm(categoryDesc) {
        setLineItemCategory(categoryDesc)
        setShowLineItemForm(true)
    }

    function saveLineItem(category, lineItem) {
        console.log('saveLineItem')
        if (!lineItem.desc?.trim()) {
            return
        }
        user.budgetCategories
            .find(c => c.desc === category)
            .lineItems
            .push(lineItem)

        API.updateBudgetCategories(user.budgetCategories).then(resp => {
            setUser(resp.data)
            setShowLineItemForm(false)
        })
    }

    function deleteLineItem(category, lineItem) {
        console.log('deleteLineItem')
        if (!lineItem?.desc?.trim()) {
            return
        }
        let lineItems = user.budgetCategories
            .find(c => c.desc === category)
            .lineItems
            .filter(i => i.desc !== lineItem.desc)
        user.budgetCategories
            .find(c => c.desc === category)
            .lineItems = lineItems
        API.updateBudgetCategories(user.budgetCategories).then(resp => {
            setUser(resp.data)
        })
    }

    function updateLineItem(category, lineItemDesc, newLineItem) {
        let lineItems = user.budgetCategories
            .find(c => c.desc === category)
            .lineItems
            .map(i => {
                if (i.desc === lineItemDesc) {
                    return newLineItem
                } else {
                    return i
                }
            })
        user.budgetCategories
            .find(c => c.desc === category)
            .lineItems = lineItems
        API.updateBudgetCategories(user.budgetCategories).then(resp => {
            setUser(resp.data)
        })
    }

    function getEstimatedTotalCost() {
        let estimatedTotalCost = 0
        user.budgetCategories.forEach(category => {
          category.lineItems.forEach(line => {
            estimatedTotalCost += line.estimatedCost
          })
        })
        return estimatedTotalCost
    }

    function getActualTotalCost() {
        let actualTotalCost = 0
        user.budgetCategories.forEach(category => {
          category.lineItems.forEach(line => {
            actualTotalCost += line.actualCost
          })
        })
        return actualTotalCost
    }

    function gePaidOffAmountTotal() {
        let paidOffAmountTotal = 0
        user.budgetCategories.forEach(category => {
          category.lineItems.forEach(line => {
            let amount = line.paidOffAmount || 0
            paidOffAmountTotal += amount
          })
        })
        let percent = Math.floor((paidOffAmountTotal / getActualTotalCost()) * 100)
        return {
            paidOffAmountTotal: paidOffAmountTotal,
            paidOffPercent: percent
        }
    }

    let {paidOffAmountTotal, paidOffPercent} = gePaidOffAmountTotal()

    return (
        <div>
            {showCategoryForm && <CategoryForm setShowCategoryForm={setShowCategoryForm} saveCategory={saveCategory}/>}
            {showLineItemForm && <LineItemForm setShowLineItemForm={setShowLineItemForm} saveLineItem={saveLineItem} deleteLineItem={deleteLineItem} category={lineItemCategory}  />}


            

            <div className="is-flex is-justify-content-center">
                <div style={{width: '250px'}} className="card mr-2 has-background-primary-light">
                    <div style={{width: '250px'}} className="card-header ">
                        <p className="card-header-title">
                            Estimated Costs Total:
                        </p>
                    </div>
                    <div className="card-content is-flex is-justify-content-center" id="total-estimated-cost">
                        <div className="content">
                            ${getEstimatedTotalCost().toLocaleString()}
                        </div>
                    </div>
                </div>
                <div style={{width: '250px'}} className="card mr-2 has-background-info-light">
                    <div style={{width: '250px'}} className="card-header ">
                        <p className="card-header-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Actual Costs Total:
                        </p>
                    </div>
                    <div className="card-content is-flex is-justify-content-center" id="total-estimated-cost">
                        <div className="content">
                            ${getActualTotalCost().toLocaleString()}
                        </div>
                    </div>
                </div>
                <div style={{width: '250px'}} className="card mr-2 has-background-warning-light">
                    <div style={{width: '250px'}} className="card-header ">
                        <p className="card-header-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paid Off Total:</p>
                    </div>
                    <div className="card-content is-flex is-justify-content-center" id="total-estimated-cost">
                        <div className="content">
                            ${paidOffAmountTotal.toLocaleString()} ({paidOffPercent}%)
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={() => setShowCategoryForm(true)} className="button is-info is-outlined ml-2 mb-2" id="top"> Add Category</button>

            <table id="categories" className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                {
                    user.budgetCategories.map((budgetCategory, index) => {
                        let categoryColor
                        if (index % 2 === 0) {
                            // Even rows
                            categoryColor = "FFB7B2"
                        } else {
                            // Odd rows
                            categoryColor = "FFECF5" 
                        }
                        return (
                            <Category key={budgetCategory.desc} 
                                category={budgetCategory} 
                                handleShowLineItemForm={handleShowLineItemForm} 
                                deleteCategory={deleteCategory}
                                deleteLineItem={deleteLineItem}
                                updateLineItem={updateLineItem}
                                color={categoryColor}
                                />
                        )
                    })
                }
            </table>
        </div>
    )
}

function Category({
    category, handleShowLineItemForm, deleteCategory, deleteLineItem, updateLineItem, color
}) {

    return (
        <>
            <thead>
                <tr>
                    <th className="is-flex is-justify-content-space-between" style={{backgroundColor:'#'+color, color: 'black'}}>
                        {category.desc}
                        <div className="is-flex is-align-items-center">
                        <button onClick={()=>handleShowLineItemForm(category.desc)} className="button">
                        + 
                        </button>
                        <button onClick={() => deleteCategory(category.desc)}className="delete is-medium ml-2"></button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    category.lineItems.map(lineItem => {
                        return <LineItem 
                            key={lineItem.desc}
                            category={category.desc}
                            lineItem={lineItem}
                            deleteLineItem={deleteLineItem}
                            updateLineItem={updateLineItem}
                            />
                    })
                }

            </tbody>
        </>
    )
}

function LineItem({
    category, lineItem, deleteLineItem, updateLineItem
}) {

    const [desc, setDesc] = useState(lineItem.desc)
    const [vendor, setVendor] = useState(lineItem.vendor)
    const [estimatedCost, setEstimatedCost] = useState(lineItem.estimatedCost)
    const [actualCost, setActualCost] = useState(lineItem.actualCost)
    const [paidOffAmount, setPaidOffAmount] = useState(lineItem.paidOffAmount)

    function getPaidOffTooltip() {
        let remaining = actualCost - paidOffAmount
        let percent = Math.floor((remaining / actualCost) * 100)
        return `Remainder to pay: $${remaining.toLocaleString()} (${percent}%)`
    }

    function handleBlur() {
        updateLineItem(category, lineItem.desc, {
            desc, vendor, estimatedCost, actualCost, paidOffAmount
        })
    }

    return (
        <tr>
            <td className="is-flex is-justify-content-space-between is-align-items-center">
                <div className="is-flex is-align-items-center">
                    <input value={desc} onChange={e=>setDesc(e.target.value)} onBlur={handleBlur} className="input is-rounded mr-1" style={{width:'300px'}} type="text" placeholder="Your Budget Line Item" />

                    <input value={vendor} onChange={e=>setVendor(e.target.value)} onBlur={handleBlur} className="input is-rounded is-small mr-1" style={{width:'300px'}} type="text" placeholder="Vendor" />
                        
                    <div className="field mb-0 ml-2">
                        <p className="control has-icons-left">
                        <input value={estimatedCost} onChange={e=>setEstimatedCost(e.target.value)} onBlur={handleBlur} className="input is-primary has-background-primary-light is-rounded is-small" style={{width:'150px'}} type="number" min="0.00" step="1.00" placeholder="Estimated Amount" />
                            <span className="icon is-small is-left">
                            <i className="fas fa-dollar-sign"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field mb-0 ml-2">
                        <p className="control has-icons-left">
                        <input value={actualCost} onChange={e=>setActualCost(e.target.value)} onBlur={handleBlur} className="input is-info has-background-info-light is-rounded is-small" style={{width:'150px'}} type="number" min="0.00" step="1.00" placeholder="Actual Amount" />
                            <span className="icon is-small is-left">
                            <i className="fas fa-dollar-sign"></i>
                            </span>
                        </p>
                    </div>
                    
                    <div data-tooltip={getPaidOffTooltip()} className="field ml-2">
                        <p className="control has-icons-left">
                        <input value={paidOffAmount} onChange={e=>setPaidOffAmount(e.target.value)} onBlur={handleBlur} className="input is-info has-background-warning-light is-rounded is-small" style={{width:'150'}} type="number" min="0.00" step="1.00" placeholder="Paid Off" />
                            <span className="icon is-small is-left">
                            <i className="fas fa-dollar-sign"></i>
                            </span>
                        </p>
                    </div>

                </div>
                <button onClick={()=>deleteLineItem(category, lineItem)} className="delete is-medium ml-2"></button>
            </td>
        </tr>
    )
}

function CategoryForm({
    setShowCategoryForm, saveCategory
}) {
    const [desc, setDesc] = useState('')

    return (
        <div id="category-form" className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add a Category</p>
                    <button onClick={() => setShowCategoryForm(false)}  className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <input value={desc} onChange={e => setDesc(e.target.value)}className="input" placeholder="Description" />
                </section>
                <footer className="modal-card-foot">
                    <button onClick={() => saveCategory(desc)} className="button is-success">Save</button>
                    <button onClick={() => setShowCategoryForm(false)} className="button">Cancel</button>
                </footer>
            </div>
        </div>
    )
}

function LineItemForm({
    setShowLineItemForm, category, saveLineItem
}) {
    const [desc, setDesc] = useState('')
    const [vendor, setVendor] = useState('')
    const [estimatedCost, setEstimatedCost] = useState('')
    const [actualCost, setActualCost] = useState('')
    const [paidOffAmount, setPaidOffAmount] = useState('')
    return (
        <div id="lineitem-form" className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Add a Line Item for <span>{category}</span></p>
                <button onClick={() => setShowLineItemForm(false)} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
                <input value={desc} onChange={e=>setDesc(e.target.value)} className="input" placeholder="Description" />
                <input value={vendor} onChange={e=>setVendor(e.target.value)} className="input" placeholder="Vendor" />
                <input value={estimatedCost} onChange={e=>setEstimatedCost(e.target.value)} className="input" type="number" min="0.00" step="1.00" placeholder="Estimated Cost"/>
                <input value={actualCost} onChange={e=>setActualCost(e.target.value)} className="input" type="number" min="0.00" step="1.00" placeholder="Actual Cost"/>
                <input value={paidOffAmount} onChange={e=>setPaidOffAmount(e.target.value)} className="input" type="number" min="0.00" step="1.00" placeholder="Paid Off"/>
            </section>
            <footer className="modal-card-foot">
                <button onClick={() => saveLineItem(category, {desc, vendor, estimatedCost, actualCost})} className="button is-success">Save</button>
                <button onClick={() => setShowLineItemForm(false)} className="button">Cancel</button>
            </footer>
        </div>
    </div>
    )
}
