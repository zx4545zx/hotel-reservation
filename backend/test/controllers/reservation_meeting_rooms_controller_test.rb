require "test_helper"

class ReservationMeetingRoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reservation_meeting_room = reservation_meeting_rooms(:one)
  end

  test "should get index" do
    get reservation_meeting_rooms_url, as: :json
    assert_response :success
  end

  test "should create reservation_meeting_room" do
    assert_difference("ReservationMeetingRoom.count") do
      post reservation_meeting_rooms_url, params: { reservation_meeting_room: { meeting_room_id: @reservation_meeting_room.meeting_room_id, reservation_id: @reservation_meeting_room.reservation_id } }, as: :json
    end

    assert_response :created
  end

  test "should show reservation_meeting_room" do
    get reservation_meeting_room_url(@reservation_meeting_room), as: :json
    assert_response :success
  end

  test "should update reservation_meeting_room" do
    patch reservation_meeting_room_url(@reservation_meeting_room), params: { reservation_meeting_room: { meeting_room_id: @reservation_meeting_room.meeting_room_id, reservation_id: @reservation_meeting_room.reservation_id } }, as: :json
    assert_response :success
  end

  test "should destroy reservation_meeting_room" do
    assert_difference("ReservationMeetingRoom.count", -1) do
      delete reservation_meeting_room_url(@reservation_meeting_room), as: :json
    end

    assert_response :no_content
  end
end
