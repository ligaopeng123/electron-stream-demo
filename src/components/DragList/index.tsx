/**********************************************************************
 *
 * @模块名称: DragList
 *
 * @模块用途: DragList  拖拽list表格
 *
 * @创建人: pgli
 *
 * @date: 2021/10/9 8:26
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import styles from './index.module.less';


const reorder = (list: any[], startIndex: number, endIndex: number) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	
	return result;
};

const getItems = (count: number): any[] =>
	Array.from({length: count}, (v, k) => k).map(k => ({
		id: `item-${k}`,
		content: `item ${k}`
	}));

const grid = 8;

const getListStyle = (isDraggingOver: boolean) => ({
	background: isDraggingOver ? "lightblue" : "lightgrey",
	padding: grid,
	width: 250
});

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: "none",
	padding: grid * 2,
	margin: `0 0 ${grid}px 0`,
	
	// change background colour if dragging
	background: isDragging ? "lightgreen" : "grey",
	
	// styles we need to apply on draggables
	...draggableStyle
});

type DragListProps = {};
const DragList: React.FC<DragListProps> = (props) => {
	const [items, setItems] = useState(getItems(10));
	const onDragEnd = (result: any) => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}
		
		const newItems = reorder(
			items,
			result.source.index,
			result.destination.index
		);
		setItems(newItems);
	};
	return (
		<React.Fragment>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="droppable">
					{(provided, snapshot) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							style={getListStyle(snapshot.isDraggingOver)}
						>
							{items.map((item: any, index: number) => (
								<Draggable key={item.id} draggableId={item.id} index={index}>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={getItemStyle(
												snapshot.isDragging,
												provided.draggableProps.style
											)}
										>
											{item.content}
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</React.Fragment>
	)
};

export default DragList;
