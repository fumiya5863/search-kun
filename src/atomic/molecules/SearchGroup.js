import React, { useState, useCallback, useRef} from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { SearchInput } from '@atoms/SearchInput';
import { Button } from '@atoms/Button';
import { BsSearch } from 'react-icons/bs';
import { SetEventValue } from '@hooks/SetEventValue';

const StyledForm = styled(Form)`
  width: 80%;
  margin:auto;
`;

const SearchGroup = () => {

  const [searchText, setSearchText] = useState("");

  const onChange = useCallback(
    (e) => {
      SetEventValue(setSearchText, e);
    },
    [searchText]
  );

  // const onChange = SetEventValue(setSearchText, searchInputRef);

  const onClick = useCallback(
    () => {
      console.log(searchText);
      return;
    },
    [searchText]
  );

  return (
    <StyledForm>

      {/* 検索バー */}
      <Form.Group>
        <SearchInput
          value={searchText}
          onChange={onChange}
        />
      </Form.Group>

      {/* ボタン */}
      <Form.Group>
        <Button
          onClick={onClick}
        >
          <BsSearch /> 検索
        </Button>
      </Form.Group>

    </StyledForm>
  );
};

export {
  SearchGroup
};

/*
検索バーに入力された文字は、SearchGroupコンポーネントがUseStateで持っている（SearchInputのvalue上から降ってくる
onChangeはSearchGroupから渡す。
onClickもSearchGroupから渡す。
*/