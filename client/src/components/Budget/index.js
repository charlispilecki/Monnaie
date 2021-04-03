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

    function handleShowLineItemForm(categoryDesc) {
        setLineItemCategory(categoryDesc)
        setShowLineItemForm(true)
    }

    function saveLineItem(lineItem) {
        console.log('saveLineItem')
        if (!lineItem.desc?.trim()) {
            return
        }
        API.addLineItem(lineItem).then(resp => {
            setUser(resp.data)
            setShowLineItemForm(false)
        })
    }

    function deleteLineItem() {

    }

    return (
        <div>
            {showCategoryForm && <CategoryForm setShowCategoryForm={setShowCategoryForm} saveCategory={saveCategory}/>}
            {showLineItemForm && <LineItemForm setShowLineItemForm={setShowLineItemForm} saveLineItem={saveLineItem} deleteLineItem={deleteLineItem} category={lineItemCategory}  />}
            <button onClick={() => setShowCategoryForm(true)} className="button is-info is-outlined ml-2 mb-2" id="top"> Add Category</button>
            {/* <!-- <button className="button is-success is-outlined ml-2" id="top"> Add Budget Item </button> --> */}

            <table id="categories" className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                {
                    user.budgetCategories.map(budgetCategory => {
                        return <Category key={budgetCategory.desc} category={budgetCategory} handleShowLineItemForm={handleShowLineItemForm}/>
                    })
                }
            </table>
        </div>
    )
}

function Category({category, handleShowLineItemForm}) {

    return (
        <>
            <thead>
                <tr>
                    <th className="is-flex is-justify-content-space-between" style={{backgroundColor:'#{categoryColor}', color: 'black'}}>
                        {category.desc}
                        <div className="is-flex is-align-items-center">
                        <button onClick={()=>handleShowLineItemForm(category.desc)} className="button">
                        + 
                        </button>
                        <button category-id="{categoryId}" className="delete is-medium ml-2"></button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    category.lineItems.map(lineItem => {
                        return <LineItem 
                            key={lineItem.desc}
                            desc={lineItem.desc}
                            vendor={lineItem.vendor}
                            estimatedCost={lineItem.estimatedCost}
                            actualCost={lineItem.actualCost}
                            />
                    })
                }

            </tbody>
        </>
    )
}

function LineItem({
    id, desc, vendor, estimatedCost, actualCost
}) {
    return (
        <tr>
            <td className="is-flex is-justify-content-space-between is-align-items-center">
                <div className="is-flex is-align-items-center">
                    <span>
                        <span>
                            <input value={desc} className="input is-rounded mr-1" style={{width:'500px'}} type="text" placeholder="Your Budget Line Item" />
                        </span>
                    </span>

                    <span>
                        <span>
                            <input value={vendor} className="input is-rounded is-small mr-1" style={{width:'400px'}} type="text" placeholder="Vendor" />
                        </span>
                    </span>
                    
                    <div className="field mb-0">
                        <p className="control has-icons-left">
                        <input value={estimatedCost} className="input is-primary has-background-primary-light is-rounded is-small" style={{width:'200px'}} type="number" min="0.00" step="1.00" placeholder="Estimated Amount" />
                            <span className="icon is-small is-left">
                            <i className="fas fa-dollar-sign"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                        <input value={actualCost} className="input is-info has-background-info-light is-rounded is-small" style={{width:'200px'}} type="number" min="0.00" step="1.00" placeholder="Actual Amount" />
                            <span className="icon is-small is-left">
                            <i className="fas fa-dollar-sign"></i>
                            </span>
                        </p>
                    </div>

                </div>
                <button line-id={id} className="delete is-medium ml-2"></button>
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
                <input value={estimatedCost} onChange={e=>setEstimatedCost(e.target.value)} className="input" placeholder="Estimated Cost"/>
                <input value={actualCost} onChange={e=>setActualCost(e.target.value)} className="input" placeholder="Actual Cost"/>
            </section>
            <footer className="modal-card-foot">
                <button onClick={() => saveLineItem({desc, vendor, estimatedCost, actualCost})} className="button is-success">Save</button>
                <button onClick={() => setShowLineItemForm(false)} className="button">Cancel</button>
            </footer>
        </div>
    </div>
    )
}